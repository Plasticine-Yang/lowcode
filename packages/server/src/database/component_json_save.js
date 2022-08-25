const { isEmpty } = require('loadsh')
const {
  checkHash,
  findInfoFromCollectionByUsername,
} = require('../utils/check')

module.exports = component_json_save =
  (hashCollection, userCollection) =>
  async ({ componentJson, decoded }) => {
    const { username, hash } = decoded
    // 如果 hash 匹配
    if (await checkHash(username, hash, hashCollection)) {
      const info = await findInfoFromCollectionByUsername(
        userCollection,
        username,
      )
      let { componentJsonList } = info
      componentJsonList = Array.from(componentJsonList)
      // 去除空对象
      const newList = !isEmpty(componentJson)
        ? [componentJson, ...componentJsonList]
        : componentJsonList
      const newInfo = {
        ...info,
        componentJsonList: newList,
      }
      // 成功更新
      userCollection.updateOne(
        { username },
        { $set: { componentJsonList: newList } },
      )
      return newInfo
    }
  }

const md5 = require('js-md5')
const path = require('path')
const { generateToken } = require(path.join(__dirname, '../utils/jwt'))

module.exports = sign_in =
  (hashCollection, userCollection) =>
  async ({ username, password }) => {
    const hash = md5(username + password)

    const find = await hashCollection.find({
      username,
    })
    const result = await find.toArray()
    const hashInfoList = Array.from(result)
    if (!hashInfoList[0]) {
      return
    }
    const realHash = hashInfoList[0].hash

    if (hash === realHash) {
      const find = await userCollection.find({
        username,
      })
      const result = await find.toArray()
      const userinfo = result[0]
      const hashInfo = {
        username,
        hash,
      }
      const accessToken = generateToken(hashInfo)
      const data = {
        accessToken,
        ...userinfo,
      }
      return data
    }
  }

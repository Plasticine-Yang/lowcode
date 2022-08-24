const md5 = require('js-md5')
const path = require('path')
const {
    generateToken
} = require(path.join(__dirname, "../utils/jwt"))

const defaultAvatarUrl = "https://cdn.taiiiyang.com/defaultAvatar.png"

// 判断是否重复 username
// 重复返回true
const isDuplicate = async (username, hashCollection) => {
    const where = {
        username
    }
    const find = await hashCollection.find(where)
    let result = await find.toArray()
    result = Array.from(result)
    return (Array.isArray(result) && result.length == 0) ? false : true
}

module.exports = sign_up =
    (hashCollection, userCollection) =>
        async ({username, password}) => {

            if (await isDuplicate(username, hashCollection)) {
                return {}
            }
            // 校验字符串
            const hash = md5(username + password)
            const userHash = {
                username,
                hash
            }
            // 根据 hash 配置生成 token 
            const accessToken = generateToken(userHash)
            // 默认配置信息
            const defaultInfo = {
                nickname: username,
                username,
                avatarUrl: defaultAvatarUrl,
                componentJsonList: []
            }
            // 插入校验信息库
            hashCollection.insertOne(userHash, (err, res) => {
                // console.log('hash-err', err);
                // console.log('res', res);
            })
            userCollection.insertOne(defaultInfo, (err, res) => {
                // console.log('user-err', err);
                // console.log('res', res);
            })
            return {
                accessToken,
                ...defaultInfo
            }
        }
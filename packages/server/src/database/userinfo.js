const {
    checkHash,
    findInfoFromCollectionByUsername
} = require('../utils/check')

const defaultAvatarUrl = "https://cdn.taiiiyang.com/defaultAvatar.png"

// 更新信息，并将新的信息返回
module.exports.userinfo_change =
    (hashCollection, userCollection) =>
        async ({
            decoded,
            nickname,
            avatarUrl,
        }) => {
            const { username, hash } = decoded
            if (await checkHash(username, hash, hashCollection)) {
                const where = {
                    username
                }
                const userinfo = await findInfoFromCollectionByUsername(userCollection, username)
                const { nickname: oldNickname, avatarUrl: oldAvatarUrl } = userinfo
                const updateInfo = {
                    ...userinfo,
                    nickname: nickname || oldNickname,
                    avatarUrl: avatarUrl || oldAvatarUrl || defaultAvatarUrl
                }
                const update = {
                    "$set": updateInfo
                }

                userCollection.updateOne(where, update)
                return updateInfo
            }
        }

module.exports.userinfo_get =
    (hashCollection, userCollection) =>
        async ({ username, hash }) => {
            if (checkHash(username, hash, hashCollection)) {
                return await findInfoFromCollectionByUsername(userCollection, username)
            }
        }

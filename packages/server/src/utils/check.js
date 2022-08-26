const checkHash = async (username, hash, hashCollection) => {
  const info = await findInfoFromCollectionByUsername(hashCollection, username)
  const realHash = info.hash
  return hash === realHash
}

const findInfoFromCollectionByUsername = async (collection, username) => {
  const find = await collection.find({
    username,
  })
  const result = await find.toArray()
  const info = result[0]
  return info
}

module.exports = {
  checkHash,
  findInfoFromCollectionByUsername,
}

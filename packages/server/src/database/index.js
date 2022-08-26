const path = require('path')

const { USER_COLLECTION, HASH_COLLECTION, URL } = require(path.join(
  __dirname,
  '../constants',
))

const component_json_save = require('./component_json_save')
const sign_in = require('./sign_in')
const sign_up = require('./sign_up')
const { userinfo_change, userinfo_get } = require('./userinfo')

// mongodb 连接
let MongoClient = require('mongodb').MongoClient
let db, userCollection, hashCollection

async function init() {
  try {
    db = await MongoClient.connect(URL) //连接数据库
    console.log('数据库已连接')
    dbase = db.db('')
    userCollection = await dbase.collection(USER_COLLECTION) //连接集合并自动创建
    hashCollection = await dbase.collection(HASH_COLLECTION)
  } catch (err) {
    throw new Error('数据库初始化错误', err)
  }
}

init()
// 数据库需要异步读取
module.exports = {
  sign_up: async function ({ username, password }) {
    return await sign_up(hashCollection, userCollection)({ username, password })
  },
  component_json_save: async function (args) {
    return await component_json_save(hashCollection, userCollection)(args)
  },
  sign_in: async function ({ username, password }) {
    return await sign_in(hashCollection, userCollection)({ username, password })
  },
  userinfo_change: async function (args) {
    return await userinfo_change(hashCollection, userCollection)(args)
  },
  userinfo_get: async function (decoded) {
    return await userinfo_get(hashCollection, userCollection)(decoded)
  },
}

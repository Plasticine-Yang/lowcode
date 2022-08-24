const { conformsTo } = require('loadsh')
const invariant = require('invariant')

/**
 * 
 * @param {object} target 需要校验的信息
 * @param {object} shape 断言属性是否符合的对象
 * @param {string} errMessage 返回错误信息
 * @param {object} ctx 上下文
 * @returns 如果校验成功则返回 true，失败则抛出错误并返回
 */
function conform(target, shape, errMessage) {
    invariant(
        conformsTo(target, shape),
        errMessage
    )
}

module.exports = conform
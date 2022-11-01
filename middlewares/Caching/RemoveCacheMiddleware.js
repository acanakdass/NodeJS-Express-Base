const RedisService = require('../../services/RedisService')
const UpdateCacheMiddleware = async (req, res, next) => {
    let keysall = await RedisService.DeleteAllByContainingKeyword()
    next();
}
module.exports = UpdateCacheMiddleware 
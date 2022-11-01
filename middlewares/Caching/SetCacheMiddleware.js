const RedisService = require('../../services/RedisService')
const SetCacheMiddleware = async (req, res, next) => {
    await RedisService.SetStringKeyValueAsync(req.baseUrl, res.locals.dataToCache)
    next();
}
module.exports = SetCacheMiddleware 
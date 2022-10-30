const RedisService = require("../services/RedisService")

const CheckCacheMiddleware = async (req, res, next) => {
    let reqUrl = req.originalUrl
    let existsRes = await RedisService.IsExists(reqUrl)
    let isExists = existsRes == 1
    if (isExists) {
        let cachedResponse = await RedisService.GetStringValueByKeyAsync(reqUrl)
        let jsonRes = JSON.parse(cachedResponse)
        jsonRes.dataSource = 'cachee'
        res.json(jsonRes)
        // next()
    } else {
        next()
    }
}
module.exports = CheckCacheMiddleware

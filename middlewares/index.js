
const AuthMiddleware = require('./AuthMiddleware')
const GlobalExHandlerMiddleware = require('./GlobalExHandlerMiddleware')
const CheckCacheMiddleware = require('./Caching/CheckCacheMiddleware')
const RoutingMiddleware = require('./RoutingMiddleware')
const SetCacheMiddleware = require('./Caching/SetCacheMiddleware')
const ValidationMiddleware = require('./ValidationMiddleware')
module.exports = {
    AuthMiddleware,
    GlobalExHandlerMiddleware,
    CheckCacheMiddleware,
    SetCacheMiddleware,
    RoutingMiddleware,
    ValidationMiddleware
}
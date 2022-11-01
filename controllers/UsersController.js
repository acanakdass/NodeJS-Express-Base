const Messages = require('../constants/Messages')
const { ErrorResult, SuccessDataResult } = require('../helpers/results')
const RedisService = require('../services/RedisService')
const UserService = require('../services/UserService')
const BaseController = require('./BaseController')
class UsersController extends BaseController{
    constructor(){
        super(UserService)
    }

    register = async (req, res, next) => {
        try {
            const result = await UserService.register(req.body)
            await RedisService.DeleteStringValueByKeyAsync(req.baseUrl)
            res.json(new SuccessDataResult(result, Messages.CREATED))
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
}
module.exports = new UsersController() 
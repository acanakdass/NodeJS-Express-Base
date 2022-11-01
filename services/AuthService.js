const UserBusinessRules = require("../businessRules/UserBusinessRules")
const Messages = require("../constants/Messages")
const { ErrorResult, ErrorDataResult, SuccessDataResult } = require("../helpers/results")
const { hashPassword, generateAccessToken, generateRefreshToken } = require("../helpers/securityHelpers")
const { UserModel } = require("../models")
const UserService = require("./UserService")

class AuthService {
    login = async (credentials) => {
        credentials.password = hashPassword(credentials.password)
        var user = await UserModel.findOne({ where: credentials })
        if (user == null) {
            return new ErrorResult(Messages.WRONG_CREDENTIALS())
        }
        let returnData = {
            ...user.dataValues,
            tokens: {
                access_token: generateAccessToken(user),
                refresh_token: generateRefreshToken(user)
            }
        }
        return new SuccessDataResult(returnData, Messages.SUCCESS_LOGIN())
    }
    register = async (userInput) => {
        userInput.password = hashPassword(userInput.password)
        var user = await UserService.getByEmail(userInput.email)
        if (user.success && user.data != null) {
            console.log(user)
            return new ErrorResult(Messages.USER_EXISTS())
        }
        var res = await UserService.add(userInput)
        return new SuccessDataResult(res, Messages.SUCCESS_REGISTER())
    }
}
module.exports = new AuthService()
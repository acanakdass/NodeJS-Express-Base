const httpStatus = require("http-status");
const BusinessRulesBase = require("../businessRules/BusinessRulesBase");
const Messages = require("../constants/Messages");
const { ErrorResult, SuccessDataResult, SuccessResult } = require("../helpers/results");
const RedisService = require("../services/RedisService");
class BaseController {
    constructor(serviceType) {
        this.service = serviceType
        this.BusinessRules = new BusinessRulesBase(serviceType)
    }
    add = async (req, res, next) => {
        try {
            req.body.userId = req.user?.id ?? null
            const result = await this.service.add(req.body)
            await RedisService.DeleteStringValueByKeyAsync(req.baseUrl)
            res.json(new SuccessDataResult(result, Messages.CREATED))
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    getAll = async (req, res, next) => {
        try {
            const result = await this.service.getAll()
            res.locals.dataToCache = JSON.stringify(result)
            res.json(result)
            next()
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    getById = async (req, res, next) => {
        try {
            let id = req.params.id
            await this.BusinessRules.assureThatEntityExistsById(id)
            const result = await this.service.getById(id)
            res.json(result)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    update = async (req, res, next) => {
        try {
            let id = req.params?.id
            await this.BusinessRules.assureThatEntityExistsById(req.params.id)
            const result = await this.service.update(id)
            await RedisService.DeleteStringValueByKeyAsync(req.baseUrl)
            res.send(new SuccessDataResult(result, Messages.NOT_FOUND()))
        } catch (error) {
            next(new ErrorResult(error.message))
        }

    }
    delete = async (req, res, next) => {
        try {
            let id = req.params?.id
            await this.BusinessRules.assureThatEntityExistsById(req.params.id)
            const result = await this.service.delete(id)
            await RedisService.DeleteStringValueByKeyAsync(req.baseUrl)
            res.json("Ok")
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }

    getAllPaginated = async (req, res, next) => {
        try {
            let pageNo = req.params.pageno
            let pageSize = req.params.pagesize
            var result = await this.service.getAllPaginated(pageNo, pageSize)
            res.json(result)
        } catch (error) {
            next(new ErrorResult(error.message))

        }
    }

}
module.exports = BaseController
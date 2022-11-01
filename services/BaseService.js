const Messages = require("../constants/Messages")
const { SuccessDataResult } = require("../helpers/results")
const RedisService = require("./RedisService")
class BaseService {
    constructor(model) {
        this.model = model
    }
    async getAll(where) {
        var res = await this.model.findAll(where || {})
        // let modelTableName = this.model.tableName
        // await RedisService.SetStringKeyValueAsync(modelTableName, res)
        // var cacheddata = await RedisService.GetStringValueByKeyAsync(modelTableName)
        return new SuccessDataResult(res, Messages.LISTED())
    }
    async getAllPaginated(pageno, pagesize) {
        let offsetVal = (pageno - 1) * pagesize
        let limitVal = pagesize
        var res = await this.model.findAll({ order: [['createdAt', 'DESC']], offset: offsetVal, limit: limitVal, raw: true })
        return new SuccessDataResult(res, Messages.LISTED())
    }
    async add(data) {
        var res = await this.model.create(data)
        // let cachedData = await RedisService.GetStringValueByKeyAsync(this.model.tableName)
        // cachedData.push(data)
        // await RedisService.SetStringKeyValueAsync(this.model.tableName,cachedData)
        return new SuccessDataResult(res, Messages.CREATED())
    }

    async update(data) {
        var res = await UserModel.update(data, {
            where: { id: data.id }
        })
        return new SuccessDataResult(res, Messages.UPDATED())
    }

    async getById(id) {
        var res = await this.model.findByPk(id)
        return new SuccessDataResult(res, Messages.LISTED())
    }
    delete(id) {
        var res = this.model.destroy({
            where: { id: id }
        })
        return new SuccessDataResult(res, Messages.DELETED())
    }
}

module.exports = BaseService;
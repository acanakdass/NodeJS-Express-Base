const Messages = require("../constants/Messages")
const { ErrorResult, SuccessDataResult } = require("../helpers/results")
class BaseService {
    constructor(model) {
        this.model = model
    }
    async getAll(where) {
        var res = await this.model.findAll(where || {})
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
        return new SuccessDataResult(res, Messages.CREATED())
    }

    async update(data) {
        var res = await UserModel.update(data, {
            where: { id: data.id }
        })
        return new SuccessDataResult(res, Messages.UPDATED())
    }

    getById(id) {
        var res = this.model.findByPk(id)
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
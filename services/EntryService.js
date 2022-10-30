const Messages = require("../constants/Messages");
const { SuccessDataResult } = require("../helpers/results");
const { EntryModel, CommentModel, UserModel, TagModel } = require("../models");
const BaseService = require("./BaseService");

class EntryService extends BaseService {
    constructor() {
        super(EntryModel)
    }
    getAll = async () => {
        let result = await EntryModel.findAll({
            include: [
                {
                    attributes: ['id', 'text', 'userId'], model: CommentModel, include: {
                        attributes: ['id', 'nickname', 'email', 'imagePath'],
                        model: UserModel
                    }
                },
                { attributes: ['id', 'name', 'createdAt', 'updatedAt'], model: TagModel },
                { attributes: ['id', 'nickname', 'email', 'imagePath'], model: UserModel }]
        })
        return new SuccessDataResult(result, Messages.LISTED())
    }
}

module.exports = new EntryService()
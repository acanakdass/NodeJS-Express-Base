const { CommentModel } = require("../models");
const BaseService = require("./BaseService");

class CommentService extends BaseService{
    constructor(){
        super(CommentModel)
    }
}
module.exports =new CommentService()
const { TagModel } = require("../models");
const BaseService = require("./BaseService");

class TagService extends BaseService{
    constructor(){
        super(TagModel)
    }
}
module.exports =new TagService()
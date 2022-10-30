const BaseController = require("./BaseController");
const TagService = require('../services/TagService')
class TagsController extends BaseController {
    constructor() {
        super(TagService)
    }
}
module.exports = new TagsController()
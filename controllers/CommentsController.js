const BaseController = require("./BaseController");
const CommentService = require('../services/CommentService')
class CommentsController extends BaseController {
    constructor() {
        super(CommentService)
    }
}
module.exports = new CommentsController()
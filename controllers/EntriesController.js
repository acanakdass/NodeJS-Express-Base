const BaseController = require("./BaseController");
const EntryService = require('../services/EntryService')
class EntriesController extends BaseController {
    constructor() {
        super(EntryService)
    }
    
}
module.exports = new EntriesController()
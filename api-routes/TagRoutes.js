const express = require('express')
const TagsController = require("../controllers/TagsController")
const router = express.Router()

router.get("/", TagsController.getAll)
module.exports = router
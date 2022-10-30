const express = require('express')
const CommentsController = require("../controllers/CommentsController")
const router = express.Router()

router.get("/", CommentsController.getAll)
module.exports = router
const express = require('express')
const EntriesController = require("../controllers/EntriesController")
const validationMiddleware = require('../middlewares/ValidationMiddleware')
const UserValidations = require('../validations/UserValidations')
const router = express.Router()

router.get("/", EntriesController.getAll)
// router.post("/login", validationMiddleware(UserValidations.loginValidation), AuthController.login)
module.exports = router
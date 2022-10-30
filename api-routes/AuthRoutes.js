const express = require('express')
const AuthController = require("../controllers/AuthController")
const validationMiddleware = require('../middlewares/ValidationMiddleware')
const UserValidations = require('../validations/UserValidations')
const router = express.Router()

router.post("/register", validationMiddleware(UserValidations.registerValidation), AuthController.register)
router.post("/login", validationMiddleware(UserValidations.loginValidation), AuthController.login)
module.exports = router
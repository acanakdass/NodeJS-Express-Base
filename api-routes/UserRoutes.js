const express = require('express')
const UsersController = require('../controllers/UsersController')
const authMiddleware = require('../middlewares/AuthMiddleware')
const validationMiddleware = require('../middlewares/ValidationMiddleware')
const router = express.Router()
const UserValidations = require('../validations/UserValidations')

router.get("/",
// authMiddleware,
  UsersController.getAll)
router.get("/:id", authMiddleware,  UsersController.getById)
router.post("/register",validationMiddleware(UserValidations.registerValidation), UsersController.register)
// router.post("/reset-password",
// validate(UserValidations.resetPasswordValidation),
// UsersController.resetPassword)
module.exports = router
const Joi = require("joi");

const addValidation = Joi.object({
    title: Joi.string().required().min(3),
    description: Joi.string(),
    content: Joi.string().required().min(5)
})
const updateValidation = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required().min(3),
    description: Joi.string(),
    content: Joi.string().required().min(5)
})

module.exports = {
    addValidation,
    updateValidation
}
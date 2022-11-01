// const Logger = require("../helpers/loggers/Logger")
const GlobalExHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json(err)
    // Logger('base').log({
    //     level: "error",
    //     message: err
    // })
}
module.exports = GlobalExHandlerMiddleware
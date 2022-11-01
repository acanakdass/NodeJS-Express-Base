const express = require('express')
const EntriesController = require("../controllers/EntriesController")
const authMiddleware = require('../middlewares/AuthMiddleware')
const CheckCacheMiddleware = require('../middlewares/Caching/CheckCacheMiddleware')
const RemoveCacheMiddleware = require('../middlewares/Caching/RemoveCacheMiddleware')
const SetCacheMiddleware = require('../middlewares/Caching/SetCacheMiddleware')
const validationMiddleware = require('../middlewares/ValidationMiddleware')

const EntryValidations = require('../validations/EntryValidations')
const router = express.Router()

router.get("/",CheckCacheMiddleware,EntriesController.getAll, SetCacheMiddleware)
// router.get("/",RemoveCacheMiddleware, CheckCacheMiddleware, EntriesController.getAll, SetCacheMiddleware)
router.get("/:id", authMiddleware, EntriesController.getById)
router.post("/",authMiddleware, validationMiddleware(EntryValidations.addValidation),EntriesController.add)
router.put("/",authMiddleware, validationMiddleware(EntryValidations.updateValidation),EntriesController.update)
router.delete("/:id",authMiddleware, EntriesController.delete)
module.exports = router
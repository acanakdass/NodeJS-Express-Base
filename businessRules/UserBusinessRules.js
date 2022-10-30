const UserService = require("../services/UserService")

class UserBusinessRules {
    assureThatEntityExistsById = async (id) => {
        let user = await UserService.getById(id)
    }
}
class BusinessRulesBase {
    constructor(serviceType) {
        this.service = serviceType
    }
    assureThatEntityExistsById = async (id) => {
        let result = await this.service.getById(id)
        if (!result.data) {
            let err = new Error("User Not Found With Id: " + id)
            err.statusCode = 500
            throw err
        }
    }
}
module.exports = BusinessRulesBase
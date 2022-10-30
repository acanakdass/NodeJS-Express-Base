// const { sequelize } = require("../loaders/db")

const SyncDB = async (sequelize) => {
    await sequelize.sync({ force: false, alter: true })
}
module.exports = SyncDB 
const { Sequelize } = require('sequelize');
const SyncDB = require('../scripts/DatabaseScripts');

const sequelize = new Sequelize("postgres","postgres", "acanakdas", {
    host: "localhost",
    dialect: "postgres",
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to Postgre has been established successfully.');
        SyncDB(sequelize)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    connectDB,
    sequelize
} 
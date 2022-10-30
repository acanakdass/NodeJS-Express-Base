const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../loaders/db');
const EntryModel = sequelize.define("entry", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, { timestamps: true, tableName: 'entries' })

module.exports = EntryModel
const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../loaders/db');

const CommentModel = sequelize.define("comment", {
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },

}, { timestamps: true, tableName: 'comments' })





module.exports = CommentModel
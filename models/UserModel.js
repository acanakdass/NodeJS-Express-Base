const { DataTypes } = require('sequelize');
const { sequelize } = require('../loaders/db');


const UserModel = sequelize.define('user', {
    nickname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagePath:{
        type:DataTypes.TEXT,
        allowNull:true,
    }
}, { timestamps: true, tableName: 'users' }
);
//UserModel.sync()
module.exports = UserModel
const { hashPassword } = require("../helpers/securityHelpers")
const { sequelize } = require("../loaders/db")
const { TagModel, UserModel, CommentModel } = require("../models")
const EntryModel = require("../models/EntryModel")
const EntryService = require("../services/EntryService")
const UserService = require("../services/UserService")

const createRelationsAndApplyToDB = async () => {
    //Many to many relation between posts and tags
    EntryModel.belongsToMany(TagModel, { through: "entries_tags", timestamps: false })
    TagModel.belongsToMany(EntryModel, { through: "entries_tags", timestamps: false })

    //One to many relation between users and posts
    UserModel.hasMany(EntryModel)
    EntryModel.belongsTo(UserModel)

    //One to many relation between comments and posts
    EntryModel.hasMany(CommentModel)
    CommentModel.belongsTo(EntryModel)

    UserModel.hasMany(CommentModel)
    CommentModel.belongsTo(UserModel)

    await sequelize.sync({ force: false, alter: true }) //update or create tables
}
const seedUser = async () => {
    const users = await UserService.getAll()
    if (users.data.length == 0) {
        let userData = {
            nickname: process.env.ADMIN_NICKNAME,
            email: process.env.ADMIN_EMAIL,
            password: hashPassword(process.env.ADMIN_PW),
        }
        UserService.add(userData).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }
    const entries = await EntryService.getAll();
}


module.exports = { createRelationsAndApplyToDB,seedUser } 
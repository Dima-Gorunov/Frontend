const sequelize = require('../db')
const {DataTypes} = require('sequelize') // класс с помощью которого описываются типы полей


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, required: true},
    password: {type: DataTypes.STRING, required: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, required: true}
})

User.hasOne(Token)
Token.belongsTo(User)


module.exports = {
    User,
    Token
}
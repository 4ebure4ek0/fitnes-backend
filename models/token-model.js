const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const Token = sequelize.define(
    'Token',
    {
        user:{
            type: DataTypes.INTEGER,
            model: 'fitnes_users',
            key: 'id'
        },
        refreshToken:{
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'fitnes_tokens',
    }
)

module.exports = Token


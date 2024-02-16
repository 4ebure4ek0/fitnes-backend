const { DataTypes } = require('sequelize')
const sequelize = require('./index')



const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING,
        },
        tel: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        isActivated: {
            type: DataTypes.BOOLEAN,
        },
        activationLink: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: 'fitnes_users',
    }
)

module.exports = User
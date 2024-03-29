const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')

class UserService{
    async registration(email, password){
        const candidate = await UserModel.findOne({ attributes: ['email']})
        if(candidate){
            throw new Error(`Пользователь с почтовым адресом ${email}уже существует`)
        } else{
            const hashPassword = await bcrypt.hash(password, 3)
            const activationLink = uuid.v4()
            const user = await UserModel.create({ email, password: hashPassword, activationLink })
            await mailService.sendActivationMail(email, activationLink)
        }
    }
}

module.exports = new UserService
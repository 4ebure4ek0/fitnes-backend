const jwt = require('jsonwebtoken')

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '90d'})
    }
}

module.exports = new TokenService
const { AuthenticationError } = require('apollo-server')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

module.exports = (context) => {
    const authHeader = context.req.headers.authorization

    if (!authHeader) {
        throw new Error('Authorization header must be provided')
    } else {
        const token = authHeader.split('Bearer')[1]

        if (!token) {
            throw new Error("Authentication token must be 'Bearer [token]'")
        } else {
            const user = jwt.verify(token, JWT_SECRET, function (err, decoded) {
                if (err) throw AuthenticationError('Invalid token')
                return decoded
            })

            return user
        }
    }
}
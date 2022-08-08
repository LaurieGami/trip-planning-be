const { ApolloError } = require('apollo-server-errors')
const User = require('../../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

async function loginUser(root, args, context) {
    const { loginInput: { email, password } } = args

    const user = await User.findOne({ email })

    if (!user) throw new ApolloError(`User with email "${email}" does not exist`, 'INVALID_USER')

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (user && isPasswordValid) {
        const token = jwt.sign(
            {
                id: user._id,
                email
            },
            JWT_SECRET,
            { expiresIn: '8h' }
        )

        user.token = token

        return {
            id: user._id,
            ...user._doc
        }
    } else {
        throw new ApolloError('Invalid password', 'INVALID_PASSWORD')
    }
}

module.exports = loginUser

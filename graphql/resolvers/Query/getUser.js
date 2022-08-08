const User = require('../../../models/User')

async function getUser(root, args, context) {
    const { id } = args

    return await User.findById(id)
} 

module.exports = getUser

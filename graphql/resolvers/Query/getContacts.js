const User = require('../../../models/User')
const Contact = require('../../../models/Contact')

async function getContacts(root, args, context) {
    const { userId } = args

    const user = await User.findOne({ _id: userId })

    if (!user) throw new ApolloError(`User ${userId} does not exist`, 'INVALID_USER')

    return await Contact.find({ userId: userId, isDeleted: { $ne: true } })
} 

module.exports = getContacts

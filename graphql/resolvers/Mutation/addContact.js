const { ApolloError } = require('apollo-server-errors')
const User = require('../../../models/User')
const Contact = require('../../../models/Contact')

async function addContact(root, args, context) {
    const { contactInput } = args
    const { userId } = contactInput

    const user = await User.findOne({ _id: userId })

    if (!user) throw new ApolloError(`User ${userId} does not exist`, 'INVALID_USER')

    const newContact = new Contact({
        ...contactInput
    })

    const res = await newContact.save()

    return {
        id: res.id,
        ...res._doc
    }
}

module.exports = addContact
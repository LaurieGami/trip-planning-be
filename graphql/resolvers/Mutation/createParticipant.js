const { ApolloError } = require('apollo-server-errors')
const User = require('../../../models/User')
const Participant = require('../../../models/Participant')

async function createParticipant(root, args, context) {
    const { participantInput } = args
    const { userId } = participantInput

    const user = await User.findOne({ _id: userId })

    if (!user) throw new ApolloError(`User ${userId} does not exist`, 'INVALID_USER')

    const newParticipant = new Participant({
        ...participantInput
    })

    const res = await newParticipant.save()

    return {
        id: res.id,
        ...res._doc
    }
}

module.exports = createParticipant
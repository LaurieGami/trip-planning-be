const User = require('../../../models/User')
const Participant = require('../../../models/Participant')

async function getParticipants(root, args, context) {
    const { userId } = args

    const user = await User.findOne({ _id: userId })

    if (!user) throw new ApolloError(`User ${userId} does not exist`, 'INVALID_USER')

    return await Participant.find({ userId: userId })
} 

module.exports = getParticipants

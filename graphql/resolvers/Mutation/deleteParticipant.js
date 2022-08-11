const { ApolloError } = require('apollo-server-errors')
const Participant = require('../../../models/Participant')

async function deleteParticipant(root, args, context) {
    const { id } = args

    const doesParticipantExist = await Participant.findById(id)

    if (!doesParticipantExist) throw new ApolloError(`This participant does not exist`, 'INVALID_PARTICIPANT')

    const updatedParticipant = await Participant.findByIdAndUpdate({ _id: id}, { $set: { isDeleted: true }}, { new: true })

    return updatedParticipant
}

module.exports = deleteParticipant

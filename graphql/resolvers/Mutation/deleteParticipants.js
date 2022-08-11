const { ApolloError } = require('apollo-server-errors')
const Participant = require('../../../models/Participant')

async function deleteParticipants(root, args, context) {
    const { ids } = args

    const errors = []

    for (let id of ids) {
        const doesParticipantExist = await Participant.findById(id)
        if (!doesParticipantExist) errors.push(id)
    }

    if (errors.length > 0) throw new ApolloError(`These participants "${errors.join(",")}" do not exist`, 'INVALID_PARTICIPANT')

    const deletedParticipants = []

    for (let id of ids) {
        const deletedParticipant = await Participant.findByIdAndUpdate({ _id: id }, { $set: { isDeleted: true }}, { new: true })
        deletedParticipants.push(deletedParticipant)
    }

    return deletedParticipants
}

module.exports = deleteParticipants

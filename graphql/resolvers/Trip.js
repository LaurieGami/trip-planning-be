const Participant = require('../../models/Participant')

const Trip = {
    async participants(root, args, context) {
        const participants = await Participant.find({ _id: { $in: root.participants } })
        return participants
    }
}

module.exports = Trip

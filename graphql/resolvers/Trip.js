const Participant = require('../../models/Participant')
const Contact = require('../../models/Contact')

const Trip = {
    async participants(root, args, context) {
        const participants = await Participant.find({ _id: { $in: root.participants } })
        return participants
    },
    async emergencyContacts(root, args, context) {
        const contacts = await Contact.find({ _id: { $in: root.emergencyContacts }})
        return contacts
    }
}

module.exports = Trip

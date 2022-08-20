const getUser = require('./Query/getUser')
const getTrip = require('./Query/getTrip')
const getTrips = require('./Query/getTrips')
const getParticipants = require('./Query/getParticipants')
const getContacts = require('./Query/getContacts')

const loginUser = require('./Mutation/loginUser')
const registerUser = require('./Mutation/registerUser')
const createTrip = require('./Mutation/createTrip')
const updateTrip = require('./Mutation/updateTrip')
const createParticipant = require('./Mutation/createParticipant')
const deleteParticipant = require('./Mutation/deleteParticipant')
const deleteParticipants = require('./Mutation/deleteParticipants')
const addContact = require('./Mutation/addContact')

const Trip = require('./Trip')

module.exports = {
    Query: {
        getUser,
        getTrip,
        getTrips,
        getParticipants,
        getContacts
    },
    Mutation: {
        loginUser,
        registerUser,
        createTrip,
        updateTrip,
        createParticipant,
        deleteParticipant,
        deleteParticipants,
        addContact
    },
    Trip
}

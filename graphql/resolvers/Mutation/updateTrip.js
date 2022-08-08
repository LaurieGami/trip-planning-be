const { ApolloError } = require('apollo-server-errors')
const Trip = require('../../../models/Trip')

async function updateTrip(root, args, context) {
    const { id, tripUpdateInput } = args

    const doesTripExist = await Trip.findById(id)

    if (!doesTripExist) throw new ApolloError('This trip does not exists', 'INVALID_TRIP')

    const input = {
        ...tripUpdateInput,
        updatedAt: new Date()
    }

    const updatedTrip = await Trip.findByIdAndUpdate({ _id: id}, input, { new: true })

    return updatedTrip
}

module.exports = updateTrip

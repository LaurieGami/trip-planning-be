const { ApolloError } = require('apollo-server-errors')
const User = require('../../../models/User')
const Trip = require('../../../models/Trip')

async function createTrip(root, args, context) {
    const { tripCreationInput } = args
    const { createdBy } = tripCreationInput

    const user = await User.findOne({ _id: createdBy })

    if (!user) throw new ApolloError(`User ${createdBy} does not exist`, 'INVALID_USER')

    const newTrip = new Trip({
        ...tripCreationInput
    })

    const res = await newTrip.save()

    return {
        id: res.id,
        ...res._doc
    }
}

module.exports = createTrip

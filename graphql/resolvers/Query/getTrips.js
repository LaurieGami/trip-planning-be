const Trip = require('../../../models/Trip')

async function getTrips(root, args, context) {
    const { userId } = args

    return await Trip.find({ createdBy: userId })
} 

module.exports = getTrips

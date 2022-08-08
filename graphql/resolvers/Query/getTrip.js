const Trip = require('../../../models/Trip')

async function getTrip(root, args, context) {
    const { id } = args

    return await Trip.findById(id)
} 

module.exports = getTrip

const { model, Schema } = require('mongoose');

const tripSchema = new Schema({
    title: String,
    createdBy: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    departureDate: Date,
    returnDate: Date,
    location: String,
    participants: [String],
    emergencyContacts: [String],
    tripStatus: {
        type: String,
        enum: [
            'draft',
            'active',
            'completed',
            'overdue'
        ],
        default: 'draft'
    },
    updatedAt: Date,
});

module.exports = model('Trip', tripSchema);

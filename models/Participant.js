const { model, Schema } = require('mongoose');

const participantSchema = new Schema({
    userId: String,
    firstName: String,
    lastName: String,
    isDeleted: { 
        type: Boolean,
        default: false,
    }
});

module.exports = model('Participant', participantSchema);

const { model, Schema } = require('mongoose');

const participantSchema = new Schema({
    userId: String,
    firstName: String,
    lastName: String,
});

module.exports = model('Participant', participantSchema);

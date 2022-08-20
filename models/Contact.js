const { model, Schema } = require('mongoose');

const contactSchema = new Schema({
    userId: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    textAlert: { 
        type: Boolean,
        default: false,
    },
    isDeleted: { 
        type: Boolean,
        default: false,
    }
});

module.exports = model('Contact', contactSchema);

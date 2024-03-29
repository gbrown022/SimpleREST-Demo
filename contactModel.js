// File: contactModel.js

var mongoose = require('mongoose');

// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = (callback, limit) => {
    Contact.find(callback).limit(limit);
};
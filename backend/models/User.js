const mangoose = require('mangoose')
const { Schema } = mangoose;
const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mangoose.model('user', UserSchema)
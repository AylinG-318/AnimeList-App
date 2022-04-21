const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema( 
    {
        // Id is automatically given...
        username: {type: String, unique: true, required: true},
        password: {type: String, required: true},
        email: {type: String, unique: true, required: true},
        moderator: {type: Boolean, required: true},
        registeredAt: {type: Date, required: true},
        // Is there a way to set a default date? 
    },
    {timestamps: true}
)

module.exports = mongoose.model('user', User)
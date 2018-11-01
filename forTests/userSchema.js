const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = Schema({
    name: String,
    friends: {type: mongoose.Types.ObjectId, ref:'Users'}
},
{collection: 'Users'});

module.exports = UserSchema;
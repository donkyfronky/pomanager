'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
bcrypt = require('bcrypt');


var UserSchema = new Schema({
    nick: {
        type: String,
        required: 'Kindly enter the name of the task',
        index: true
    },
    status: {
        type: [{
            type: String,
            enum: ['deleted', 'suspended', 'active']
        }],
        default: ['active']
    },
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Boolean,
        default: false
    },
    ownTasks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tasks',
        index: true}]
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('User', UserSchema);
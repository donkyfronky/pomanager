'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MsgidSchema = new Schema({
    msgid: {
        type: String,
        required: 'Kindly enter the name of the task',
        index: true
    },
    msgid_plural: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Msgid', MsgidSchema);
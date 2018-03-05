'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MsgstrSchema = new Schema({
    msgid:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Msgid',
        index: true},
    msgid_plural: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Msgstr', MsgstrSchema);
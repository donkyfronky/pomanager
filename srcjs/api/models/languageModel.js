'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LanguageSchema = new Schema({
    language: {
        type: String,
        required: 'Kindly enter the name of the task',
        index: true
    },
    tld: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Language', LanguageSchema);
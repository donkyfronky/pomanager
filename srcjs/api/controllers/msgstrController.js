'use strict';


var mongoose = require('mongoose'),
    Msgstr = mongoose.model('Msgstr'),
    path = require('path');

exports.create_a_Msgstr = function(req, res) {
    console.log(req);
    var new_Msgstr = new Msgstr(req.body);
    new_Msgstr.save(function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    });
};


exports.read_a_Msgstr = function(req, res) {
    Msgstr.findById(req.params.msgstrid, function(err, Msgstr) {
        if (err)
            res.send(err);
        res.json(new_Msgstr);
    });
};

exports.search_Msgstr_by_MsgidId = function(MsgidId) {
    return Msgstr.find({'msgid_ref':MsgidId}).exec();
};
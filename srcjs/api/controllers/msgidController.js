'use strict';


var mongoose = require('mongoose'),
    Msgid = mongoose.model('Msgid'),
    path = require('path');

exports.list_all_Msgids = function(req, res) {
    /*var gettextParser = require("gettext-parser");
    var input = require('fs').readFileSync(path.resolve('./locale-tmp/it/LC_MESSAGES/messages.po'));
    var po = gettextParser.po.parse(input);
    res.json(po.translations[''])*/
    Msgid.find({}, function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
    })
};

exports.create_a_Msgid = function(req, res,next) {
    var new_Msgid = new Msgid(req.body);
    new_Msgid.save()
        .then(res.send,e=>res.send(e))
        .catch(next);
    /*new_Msgid.save(function(err, Msgid) {
        if (err) {
            res.send(err);
        }else{
            res.send(Msgid);
        }
        res.json(Msgid);
    }).then(next);*/

};


exports.read_a_Msgid = function(req, res) {
    Msgid.findById(req.params.MsgidId, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    }).then(next);
};


exports.update_a_Msgid = function(req, res) {
    Msgid.findOneAndUpdate({_id: req.params.MsgidId}, req.body, {new: true}, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    }).then(next);
};


exports.delete_a_Msgid = function(req, res) {


    Msgid.remove({
        _id: req.params.MsgidId
    }, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json({ message: 'Msgid successfully deleted' });
    }).then(next);
};

exports.search_a_Msgid = function (req,res) {
    console.log(req.query.name);
    //{ $text: { $search: "java coffee shop" } }
    Msgid.find({
            name: new RegExp(req.query.name, "i")
        },null,{sort: {
        Created_date:1
            }
    },function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    }).then(next);
};
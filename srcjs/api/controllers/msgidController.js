'use strict';


var mongoose = require('mongoose'),
    Msgid = mongoose.model('Msgid');

exports.list_all_Msgids = function(req, res) {
    Msgid.find({}, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    });
};

exports.create_a_Msgid = function(req, res) {
    console.log(req);
    var new_Msgid = new Msgid(req.body);
    new_Msgid.save(function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    });
};


exports.read_a_Msgid = function(req, res) {
    Msgid.findById(req.params.MsgidId, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    });
};


exports.update_a_Msgid = function(req, res) {
    Msgid.findOneAndUpdate({_id: req.params.MsgidId}, req.body, {new: true}, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    });
};


exports.delete_a_Msgid = function(req, res) {


    Msgid.remove({
        _id: req.params.MsgidId
    }, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json({ message: 'Msgid successfully deleted' });
    });
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
    });
};
'use strict';


var mongoose = require('mongoose'),
    Msgid = mongoose.model('Msgid'),
    MsgidStr=require('./msgstrController'),
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

exports.search_a_Msgid = function (req,res,next) {

    let final_msgstr;

    Msgid
        .findById(req.params.MsgidId)
        .then(Msgid=>{
            console.log('msgid',Msgid)
            final_msgstr = Msgid
            return MsgidStr.search_Msgstr_by_MsgidId(Msgid._id)
        })
        .then(result=>{
            console.log(result)
            res.json({ msgid:final_msgstr,msgstr:result});
            next()
        }).catch(err=>{res.send(err);next()})
/*
    Msgid
        .findOne({ _id: req.params.MsgidId })
        .then(Msgid=>{search_Msgstr_by_MsgidId(Msgid._id)}
            ,function(err) {
            if (err)
                res.send(err);
            res.json(Msgid);
        })*/
    /*
    //{ $text: { $search: "java coffee shop" } }
    Msgid.findOne({
            _id: req.params.MsgidId
        },null,{sort: {
        Created_date:1
            }
    },function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    }).populate('Msgstr').then(next,e=>res.send({'message':'msgid not found','error':e}));*/


};
'use strict';


var mongoose = require('mongoose'),
    Language = mongoose.model('Language'),
    path = require('path');

exports.listLanguages = function(req, res,next) {
    /*var gettextParser = require("gettext-parser");
    var input = require('fs').readFileSync(path.resolve('./locale-tmp/it/LC_MESSAGES/messages.po'));
    var po = gettextParser.po.parse(input);
    res.json(po.translations[''])*/
    Language.find({}, function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
    })
};

exports.createLanguage = function(req, res,next) {
    console.log('entro')
    console.log('body vale',req.body)
    var new_Language = new Language(req.body);
    new_Language.save()
        .then(a=>{console.log('tutt\'appost');res.send(a)},e=>{console.log('erroreee!!');res.send(e)})
        .catch(next);
};


exports.findLanguage = function(req, res) {
    Language.findById(req.params.LanguageID, function(err, Msgid) {
        if (err)
            res.send(err);
        res.json(Msgid);
    }).then(next);
};


exports.updateLanguage = function(req, res) {
    Language.findOneAndUpdate({_id: req.params.LanguageID}, req.body, {new: true}, function(err, Language) {
        if (err)
            res.send(err);
        res.json(Msgid);
    }).then(next);
};


exports.deleteLanguage = function(req, res,next) {
    Language.remove({
        _id: req.params.LanguageID
    }, function(err, Language) {
        if (err)
            res.send(err);
        res.json({ message: 'Language successfully deleted' });
    }).then(next);
};

exports.searchLanguage = function (req,res) {
    console.log(req.query.name);
    //{ $text: { $search: "java coffee shop" } }
    Language.find({
        name: new RegExp(req.query.name, "i")
    },null,{sort: {
            Created_date:1
        }
    },function(err, Language) {
        if (err)
            res.send(err);
        res.json(Language);
    }).then(next);
};
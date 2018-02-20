'use strict';


var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt');

exports.list_all_users = function(req, res) {
    User.find({}, function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
    }).populate('ownTasks');
};

exports.register = function(req, res) {
    var newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function(err, user) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.hash_password = undefined;
            return res.json(user);
        }
    });
};

exports.sign_in = function(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        let user_tk = Object.assign({}, user._doc);
            delete user_tk.hash_password;
console.log(user_tk);
        return res.json({ token: jwt.sign({user_tk}, 'RESTFULAPIs') });
    });
};

exports.loginRequired = function(req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};
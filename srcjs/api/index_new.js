var express = require('express'),
    app = express(),
    port = process.env.PORT || 80,
    mongoose = require('mongoose'),
    Msgid = require('./models/msgidModel'), //created model loading here
    User = require('./models/userModel'),
    Msgstr = require('./models/msgstrModel'),
    Language = require('./models/languageModel'),
    jsonwebtoken = require("jsonwebtoken"),
    bodyParser = require('body-parser');

var url = 'mongodb://mongo:27017/pomanager';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(url);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
    console.log('Time:', Date.now());
    next();
});

app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        console.log('verifico il token');
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            console.log(decode);
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

var routes = require('./routes/msgidRoutes'); //importing route
routes(app); //register the route
routes = require('./routes/LanguageRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
var j = jsonwebtoken.sign({ email: 'dado', fullName: 'dado', _id: 'dado' }, 'RESTFULAPIs')
console.log(j);
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var gettextParser = require("gettext-parser");
var ee = require('event-emitter');
var emitter = ee();


const advertHandler = require('./datatabase/PoImporter');
const PoImporter = new advertHandler({test: "one"});
console.log(PoImporter.getProject('test'));


/*
var url = 'mongodb://mongo:27017/pomanager';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});*/

var input = require('fs').createReadStream('messages.po');
var po = gettextParser.po.createParseStream({});
input.pipe(po);
po.on('data', function(data){
    emitter.emit('test', data);
});

emitter.on('test', function (args) {
    console.log(args);
});

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(80, () => console.log('Example app listening on port 3000!'))
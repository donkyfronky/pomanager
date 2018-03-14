let restify = require('restify'),
    app = restify.createServer({handleUncaughtExceptions: true}),
    port = process.env.PORT || 80,
    jsonwebtoken = require("jsonwebtoken"),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Msgid = require('./models/msgidModel'), //created model loading here
    User = require('./models/userModel'),
    Msgstr = require('./models/msgstrModel'),
    Language = require('./models/languageModel'),
    LanguageController = require('./controllers/LanguageController'),
    errors = require('restify-errors'),
    MsgidContoller=require('./controllers/msgidController');


var url = 'mongodb://mongo:27017/pomanager';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(url);
//req.accepts('application/json');
const corsMiddleware = require('restify-cors-middleware');
const cors = corsMiddleware({
    'origins': ['*'],
    allowHeaders: ['Authorization'],
});
app.pre(cors.preflight);
app.use(cors.actual);

app.use(restify.plugins.queryParser());
app.use(restify.plugins.bodyParser({
    multiples: true,
    mapParams: true
}));

app.use(restify.plugins.fullResponse())
app.use((request,response,next)=>{
    if(request.params.force_error){
        next(new errors.BadRequestError('Madre'))
    }else{
        next()
    }
})
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


/** msgid routes **/
app.get('/msgids', MsgidContoller.list_all_Msgids);
app.post('/msgids', MsgidContoller.create_a_Msgid);
app.get('/msgids/:MsgidId',MsgidContoller.read_a_Msgid);
app.put('/msgids/:MsgidId',MsgidContoller.update_a_Msgid);
app.del('/msgids/:MsgidId',MsgidContoller.delete_a_Msgid);
app.get('/msgid/:MsgidId',MsgidContoller.search_a_Msgid);


app.get('/languages',LanguageController.listLanguages)
    //.post(userController.loginRequired, todoList.create_a_Msgid);
app.post('/language',LanguageController.createLanguage);
app.get('/language/:LanguageID',LanguageController.findLanguage)
app.put('/language/:LanguageID',LanguageController.updateLanguage)
app.del('/language/:LanguageID',LanguageController.deleteLanguage);


app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
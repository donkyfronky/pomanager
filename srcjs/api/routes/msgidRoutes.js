'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/msgidController');
    var userController = require('../controllers/UserController');

    // todoList Routes
    app.route('/msgids')
        .get(todoList.list_all_Msgids)
       // .post(userController.loginRequired, todoList.create_a_Msgid);
        .post(todoList.create_a_Msgid);

    app.route('/msgids/:MsgidId')
        .get(todoList.read_a_Msgid)
        .put(todoList.update_a_Msgid)
        .delete(todoList.delete_a_Msgid);

    app.route('/msgid/search')
        .get(todoList.search_a_Msgid);

    app.route('/users')
        .get(userController.loginRequired,userController.list_all_users);

    app.route('/auth/register')
        .post(userController.register);

    app.route('/auth/sign_in/')
        .post(userController.sign_in);
};

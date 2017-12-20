'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoListController');
    var userController = require('../controllers/UserController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(userController.loginRequired, todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/task/search')
        .get(todoList.search_a_task);

    app.route('/users')
        //.get(userController.loginRequired,userController.list_all_users);
        .get(userController.list_all_users);

    app.route('/auth/register')
        .post(userController.register);

    app.route('/auth/sign_in/')
        .post(userController.sign_in);
};

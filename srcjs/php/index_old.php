<html>
<body>
<div id="container">


    <h2>Users</h2>
    <ul id="users_list"></ul>
    <form id="users">
        <input type="text" name="user_name" id="user_name">
        <input type="submit" />
        <span id="error_user"></span>
    </form>


    <h2>Tasks</h2>
    <ul id="tasks_list"></ul>
    <form id="tasks">
        <input type="text" name="task_name" id="task_name">
        <input type="submit" />
        <span id="error_task"></span>
    </form>



    <h2>Tasks to users</h2>
    <form id="tasks_to_user">

        <select id="sel_users"></select>
        <select id="sel_tasks"></select>
        <div id="user_had_to"></div>
    </form>


</div>
<script type="text/javascript" src="jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="http"></script>
<script>


    var jwt = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVhMjI3M2M4ODQ1NDIzMDA5NDA0M2Q0MSIsImhhc2hfcGFzc3dvcmQiOiIkMmEkMTAkNjJtVnJsZlVZSmxSU2x2LlZqd2tHdVRUM3ZER0pBU0UybkpJLkVncGVYaFE1VjRzZ3YzL0siLCJuaWNrIjoibWFyaW8iLCJmdWxsTmFtZSI6Ik1hcmlvIEJyZWdhIiwiZW1haWwiOiJtYXJpby5icmVnYUBsb2wuaXQiLCJfX3YiOjAsIm93blRhc2tzIjpbXSwiYWRtaW4iOmZhbHNlLCJjcmVhdGVkIjoiMjAxNy0xMi0wMlQwOTozNTowNC43NTBaIiwic3RhdHVzIjpbImFjdGl2ZSJdfSwiaWF0IjoxNTEyMjA3NTU3fQ.If3UkNAB8m2iuPpRiv_VFqPNL1iqcrIjCuEiGVsqdf4';
    var users_saved = {};
    var tasks_saved = {};

    var selected_user = null;
    var selected_task = null;

    var ul_users = $('#users_list');
    var ul_tasks = $('#tasks_list');

    function loadUserSelects(){
        var sel_users = $('#sel_users');

        loadSelect(sel_users,users_saved);
    }

    function loadTaskSelects(){
        var sel_tasks = $('#sel_tasks');

        loadSelect(sel_tasks,tasks_saved);
    }


    function loadSelect(selectElement,dataList){

        selectElement.html('');

        selectElement.append('<option value="0">Seleziona</option>')

        $.each(dataList,function(index,data){
            selectElement.append('<option value="'+data._id+'">'+data.name+'</option>')
        });
    }

    function loadUl(elementHtml,dataList){
        elementHtml.html('');
        $.each(dataList, function( index, data ) {
            elementHtml.append('<li>'+data.name+'['+data.Created_date+']</li>');
        });
    }

    function loadUsers(){
        ul_users.html('');
        $.ajax({
            url: "/api/users",
            data: {
            },
            headers: {"Authorization": jwt},
            success: function( users ) {
                users_saved = users;
                loadUl(ul_users,users_saved);
                loadUserSelects();
            }
        });
    }

    function loadTasks(){
        ul_tasks.html('');
        $.ajax({
            url: "http://localhost:8080/tasks",
            data: {
            },
            headers: {"Authorization": jwt},
            success: function( tasks ) {
                tasks_saved = tasks;
                loadUl(ul_tasks,tasks_saved);
                loadTaskSelects();
            }
        });
    }



    $('#users').on('submit',function(evt){
        evt.preventDefault();
        var new_user = $('#user_name').val();
        var span_error_user = $('#error_user');

        var error_user = '';
        if(new_user===''){
            error_user = 'il nome utente non può essere vuoto!';
            span_error_user.html(error_user);
            return;
        }

        $.ajax({
            url: "http://localhost:8080/users",
            type: 'post',
            data: {
                name:new_user
            },
            headers: {"Authorization": jwt},
            success: function( users ) {
                users_saved.push(users);
                loadUsers(ul_users);

            }
        });

    });

    $('#tasks').on('submit',function(evt){
        evt.preventDefault();
        var new_task = $('#task_name').val();
        var span_error_task = $('#task_user');

        var error_task = '';
        if(new_task===''){
            error_task = 'il nome utente non può essere vuoto!';
            span_error_task.html(error_task);
            return;
        }

        $.ajax({
            url: "http://localhost:8080/tasks",
            type: 'post',
            data: {
                name:new_task
            },
            headers: {"Authorization": jwt},
            success: function( tasks ) {
                tasks_saved.push(tasks);
                loadTasks(ul_tasks);

            }
        });

    });

    $('#sel_users').on('change',function(evt){

        var that_user_id = $(this).val();
        var user_task_list = $('#user_had_to');


        selected_user = users_saved.filter(function( obj ) {
            return obj._id===that_user_id;
        });

        if(selected_user!==[]) {
            selected_user = selected_user[0];
            $.each(selected_user.ownTasks, function (index, task) {
                user_task_list.append('<p>- ' + task.name + '</p>');
            });
        }
    });

    $('#sel_tasks').on('change',function(evt){

        var that_task_id = $(this).val();

        selected_task = tasks_saved.filter(function( obj ) {
            return obj._id===that_task_id;
        });

        if(selected_user!==[]) {
            selected_task = selected_task[0];
        }
    });



    //http://localhost/task/search/?name=ro
    $(document).ready(function(){
        loadUsers();
        loadTasks();

    });
</script>
</body>
</html>
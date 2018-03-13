import swal from 'sweetalert2'
let externalApi = require("../apiFunctions.js");
let utils = require('../utilsFunction')
let menu_template = require("../../templates/menu.handlebars");
import $ from 'domtastic';

var div = document.getElementById('menu-template');
div.innerHTML = menu_template({});

function loadTranslation(){
    return new Promise((resolve,reject)=>{
        let msgid_id = utils.getParameterByName('msgid')
        if(msgid_id !== null && msgid_id !== ''){
            resolve(msgid_id)
        }

        reject(new Error('undefined msgid'))

    });
}

function returnUndefinedMsgidModal(message){
    return swal({
        type: 'error',
        title: 'Oops...',
        text: message
    })
}



loadTranslation()
    .then(e=>console.log(e),
        (f)=>{console.warn(f);returnUndefinedMsgidModal(f)});
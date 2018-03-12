var externalApi = require("../apiFunctions.js");

function popUl(elem){
    let table = document.getElementById('msgid-list');
    let oldTableRef = table.getElementsByTagName('tbody')[0];
    let tableRef = document.createElement('tbody');

    elem.map((el)=>{

        let newRow   = tableRef.insertRow(tableRef.rows.length);

        newRow.addEventListener('click',function(e){

        });

        let singolare  = newRow.insertCell(0);

        singolare.addEventListener('click',e=>{
            editMsgid(e,el)
        })

        let plurale  = newRow.insertCell(1);
        let actions  = newRow.insertCell(2);

        let newText  = document.createTextNode(el.msgid);
        let newTextPlurale  = document.createTextNode('');

        plurale.addEventListener('click',e=>{
            editMsgid(e,el)
        })

        if(el.msgid_plural){
            newTextPlurale  = document.createTextNode(el.msgid_plural);
        }

        singolare.appendChild(newText);
        plurale.appendChild(newTextPlurale);
    });

    table.replaceChild(tableRef,oldTableRef)

}

let input = document.getElementById('search-control');
let obj_list;

input.addEventListener('keyup', function(ev) {
    let text = ev.target.value;
    let pat = new RegExp(text, 'i');

    popUl(obj_list.filter(e=>{
        if(pat.test(e.msgid))
            return e
    }))

});

function  editMsgid(event,thatMsgid) {
    window.location = '/edit.php?msgid='+thatMsgid._id;
    /*
    let msgid = {'_id':'5aa50dada17502005a8e67af',"msgid":'genio',"msgid_plural":""}

    externalApi.editMsgid(msgid)
        .then((res)=>{console.log(res)},err=>console.log(err))
        */
}

externalApi.loaderMsgidList().then(j => {
    obj_list = Object.values(j);
    popUl(obj_list)
});


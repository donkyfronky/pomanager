import wretch from 'wretch';
const externalApi = wretch()
    .auth(`JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhZG8iLCJmdWxsTmFtZSI6ImRhZG8iLCJfaWQiOiJkYWRvIiwiaWF0IjoxNTIwMzcxODc4fQ.TP4qPWliOzjJeZib6RU91kvUuhVj7Yjug7Ll-G2F6R0`);

Array.from(document.getElementsByClassName('nav-link')).forEach(link => {
    link.addEventListener('click', function(event) {
        document.getElementsByClassName('nav-link active')[0].classList.remove('active')
        this.classList.add('active')
        console.log('parto')
    });
});

function popUl(elem){
    let table = document.getElementById('msgid-list');
    let oldTableRef = table.getElementsByTagName('tbody')[0];
    let tableRef = document.createElement('tbody');

    elem.map((el)=>{


        let newRow   = tableRef.insertRow(tableRef.rows.length);

        newRow.addEventListener('click',function(e){
            console.log(el);
        })

        let singolare  = newRow.insertCell(0);
        let plurale  = newRow.insertCell(1);
        let actions  = newRow.insertCell(2);

        let newText  = document.createTextNode(el.msgid);
        let newTextPlurale  = document.createTextNode('');

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


externalApi
    .url('//api.pomanager.it/msgids')
    .get()
    .json()
.then(j=>{obj_list = j; popUl(obj_list)})
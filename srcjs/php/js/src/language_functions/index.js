import swal from 'sweetalert2'
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

        let newText  = document.createTextNode(el.language);
        let newTextPlurale  = document.createTextNode('');

        plurale.addEventListener('click',e=>{
            editMsgid(e,el)
        })

        newTextPlurale  = document.createTextNode(el.tld);

        singolare.appendChild(newText);
        plurale.appendChild(newTextPlurale);
        let m = document.createElement("i");
        m.classList.add('fa')
        m.classList.add('fa-times')
        m.addEventListener('click',function(){
            removeLanguage(el)
        })
        m.setAttribute('aria-hidden','true')
        actions.appendChild(m);

    });

    table.replaceChild(tableRef,oldTableRef)

}

let input = document.getElementById('search-control');
let obj_list;


function reloadTable(cb) {
    externalApi.loaderLanguageList().then(j => {
        obj_list = Object.values(j);
        popUl(obj_list)
        if(typeof cb !=='undefined' && cb!==null){
            cb()
        }
    });
}



function removeLanguage(language){
        swal({
                title: 'Are you sure to delete:<br/> '+language.language,
                 text: "You won't be able to revert this!",
                 type: 'warning',
                 showCancelButton: true,
                 confirmButtonColor: '#3085d6',
                 cancelButtonColor: '#d33',
                 confirmButtonText: 'Yes, delete it!'
             }).then((result) => {
        if (result.value) {
            if (result.value) {
                externalApi
                    .removeLanguage(language)
                    .then(()=> {
                            swal({
                                type: 'success',
                                title: 'Language succesfully deleted',
                                html: 'Submitted email: '
                            })
                            reloadTable()
                        }
                    )
            }
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}
document.getElementById('add-language-action').addEventListener('click',function(e){
        e.preventDefault();
    swal({
        title: 'Add a new Language',
        html: '  <div class="form-group  row">\n' +
        '    <label for="exampleInputEmail1">Language name</label>&nbsp;\n' +
        '    <input id="language-name" type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter language name">\n' +
        '  </div>' +
        '  <div class="form-group  row">\n' +
        '    <label for="exampleInputEmail1">Tld</label>&nbsp;\n' +
        '    <input id="language-tld" type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter tld">\n' +
        '  </div>',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: () => {

            let language_name = document.getElementById('language-name').value,
                language_tld = document.getElementById('language-tld').value;

            if(language_name === '' || language_tld === '') {
                swal.showValidationError(
                    'Fill all field!'
                )
            }

            let tld_validator = new RegExp('^([a-z]){2}_([A-Z]){2}', 'g');
            if(!tld_validator.test(language_tld)) {
                swal.showValidationError(
                    'Enter a valid tld!<br/> Should be xx_YY'
                )
            }

        },
        allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
        if (result.value) {
            let language_name = document.getElementById('language-name').value,
                language_tld = document.getElementById('language-tld').value;
            externalApi.createLanguage({language:language_name,tld:language_tld}).then(()=>{
                swal({
                    type: 'success',
                    title: 'Ajax request finished!',
                    html: 'Submitted email: ' + result.value
                });
                reloadTable()
            },()=>{()=> {
                        swal({
                            type: 'error',
                            title: 'tummaaaadreee!!!',
                            html: 'Submitted email: '
                        })
                    }
            })
        }
    })
});

reloadTable()
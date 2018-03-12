import wretch from 'wretch';

const Api = wretch()
    .auth('JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhZG8iLCJmdWxsTmFtZSI6ImRhZG8iLCJfaWQiOiJkYWRvIiwiaWF0IjoxNTIwMzcxODc4fQ.TP4qPWliOzjJeZib6RU91kvUuhVj7Yjug7Ll-G2F6R0');

module.exports = {
    loaderMsgidList:function()
    {
        return Api
                .url('//api.pomanager.it/msgids')
                .get()
                .json()
    },
    editMsgid: function(msgid)
    {
    return Api
            .url('//api.pomanager.it/msgids')
            .json(msgid)
            .post()
            .json()
    },
    loaderLanguageList:function()
    {
        return Api
            .url('//api.pomanager.it/languages')
            .get()
            .json()
    },
    createLanguage:function (language) {
        return Api.url('//api.pomanager.it/language')
            .json(language)
            .post()
            .json()
    },
    removeLanguage:function (language) {

        return Api.url('//api.pomanager.it/language/'+language._id)
            .json(language)
            .delete()
            .json()
    }
};



Array.from(document.getElementsByClassName('nav-link')).forEach(link => {
    link.addEventListener('click', function(event) {
        document.getElementsByClassName('nav-link active')[0].classList.remove('active')
        this.classList.add('active')
    });
});
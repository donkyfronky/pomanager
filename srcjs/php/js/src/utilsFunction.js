import swal from 'sweetalert2'
module.exports = {
    getParameterByName: function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    simpleErrorModal: function(error){
        let text = JSON.parse(error.message).message
        return swal({
            type: 'error',
            text: text,
        })
    },
    simpleSuccessModal: function(success){
        return swal({
            type: 'success',
            text: success.message,
        })
    },
}
"use strict";

const getFileUploadName = (() => {

    $(document).ready(function() {
        $('#message__fileInput').change(function(e) {
            $('.message__showFile').text(e.target.files[0].name);
        });
    })
})();

export default getFileUploadName;
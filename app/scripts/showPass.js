"use strict";

/* show password */
const showPass = (() => {
    $('#showPass').click(function() {
        if($('#pass').attr('type')=="password"){
            $('#pass').attr( "type", "text");
        }
        else{
            $('#pass').attr( "type", "password");
        }
    });
})();

export default showPass;
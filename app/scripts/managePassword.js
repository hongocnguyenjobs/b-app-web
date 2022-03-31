"use strict";

/* Control form change password in manage info page */
const managePassword = (() => {
    $('#managePassword').hide();
    $('#managePasswordControl').click(function () {
        $('#managePasswordCheck').is( ":checked" ) ? $('#managePassword').show(500) : $('#managePassword').hide(500);
    });
})();

export default managePassword;
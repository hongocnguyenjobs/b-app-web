"use strict";

/* show password */
const autoTabNextInputReceiveCode = (() => {
    $(".ad-a-house__input-receive-code").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).parent().next().find('.ad-a-house__input-receive-code').focus();  
        }
    });

    $(".add-new-card__input-number-card").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).parent().next().find('.add-new-card__input-number-card').focus();  
        }
    });
})();

export default autoTabNextInputReceiveCode;
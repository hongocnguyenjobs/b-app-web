"use strict";

const buttonSubAdd = (() => {
    $('.house__btn').each(function() {
        var  form = $(this);
        $('.house__btn-add').click(function () {
            var num = $(".house__btn-result").val();
            $(".house__btn-result").val(parseInt(num) + 1);
        });
        $('.house__btn-sub').click(function () {
            var num = $(".house__btn-result").val();
            if( num > 0 ){
                $(".house__btn-result").val(parseInt(num) - 1);
            }
        });
    });
})();

export default buttonSubAdd;
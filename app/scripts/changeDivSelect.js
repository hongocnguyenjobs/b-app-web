"use strict";

const changeDivSelect = (() => {
    $(document).ready(function(){
        $('#selectOptions li').bind('click',function(){
            var page = $(this).attr('rel');
            $('.ad-a-house__currency-content').hide();
            $('#' + page).show();
        })
    })
})();

export default changeDivSelect;
"use strict";

/* Search Filters */
const searchFilters = (() => {
    $(document).ready(function(){
        $("#messageInputSearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".message__userName").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
})();

export default searchFilters;
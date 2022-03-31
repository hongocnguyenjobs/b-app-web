"use strict";

const datePicker = (() => {
    $('#addAHouseStep7_Datepicker').datepicker();
    $('#addAHouseStep7_Datepicker').on('changeDate', function() {
        var abc = $('#addAHouseStep7_myHiddenInput').val(
            $('#addAHouseStep7_Datepicker').datepicker('getFormattedDate')
        );
    });

    $('.range').datepicker({
	    inputs: $('.range-start, .range-end')
	});
})();

export default datePicker;
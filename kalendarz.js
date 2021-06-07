$("#przyjazd").datepicker({
    minDate: 0,
    maxDate: 10,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var min = $(this).datepicker('getDate'); 
        $("#wyjazd").datepicker('option', 'minDate', min); 
    }
});

$("#wyjazd").datepicker({
    minDate: '0',
    maxDate: 100,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var max = $(this).datepicker('getDate'); 
        $('#datepicker').datepicker('option', 'maxDate', max);
        var start = $("#przyjazd").datepicker("getDate");
        var end = $("#wyjazd").datepicker("getDate");
        var days = (end - start) / (1000 * 60 * 60 * 24);
        var e = document.getElementById("inputGroupSelect01");
        var roomPrice = e.options[e.selectedIndex].value;
        $("#totalDays").val(days + " dni");
        $("#totalPrice").val(days * roomPrice + " zł")
    }
});


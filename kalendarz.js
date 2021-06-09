// ROOM 1

$("#przyjazd1").datepicker({
    minDate: 0,
    maxDate: 10,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var min = $(this).datepicker('getDate'); 
        $("#wyjazd1").datepicker('option', 'minDate', min); 
    }
});

$("#wyjazd1").datepicker({
    minDate: '0',
    maxDate: 100,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var max = $(this).datepicker('getDate'); 
        $('#datepicker1').datepicker('option', 'maxDate', max);
        var start = $("#przyjazd1").datepicker("getDate");
        var end = $("#wyjazd1").datepicker("getDate");
        var days = (end - start) / (1000 * 60 * 60 * 24);
        var d = document.getElementById("room1");
        var room1Price = d.value
        $("#totalDays1").val(days + " dni");
        $("#totalPrice1").val(days * room1Price + " zł")
    }
});

    // ROOM 2

$("#przyjazd2").datepicker({
    minDate: 0,
    maxDate: 10,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var min = $(this).datepicker('getDate'); 
        $("#wyjazd2").datepicker('option', 'minDate', min); 
    }
});

$("#wyjazd2").datepicker({
    minDate: '0',
    maxDate: 100,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var max = $(this).datepicker('getDate'); 
        $('#datepicker2').datepicker('option', 'maxDate', max);
        var start = $("#przyjazd2").datepicker("getDate");
        var end = $("#wyjazd2").datepicker("getDate");
        var days = (end - start) / (1000 * 60 * 60 * 24);
        var d = document.getElementById("room2");
        var room2Price = d.value
        $("#totalDays2").val(days + " dni");
        $("#totalPrice2").val(days * room2Price + " zł")
    }
});

// ROOM 3

$("#przyjazd3").datepicker({
    minDate: 0,
    maxDate: 10,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var min = $(this).datepicker('getDate'); 
        $("#wyjazd3").datepicker('option', 'minDate', min); 
    }
});

$("#wyjazd3").datepicker({
    minDate: '0',
    maxDate: 100,
    monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
    onSelect: function (dateStr) {
        var max = $(this).datepicker('getDate'); 
        $('#datepicker3').datepicker('option', 'maxDate', max);
        var start = $("#przyjazd3").datepicker("getDate");
        var end = $("#wyjazd3").datepicker("getDate");
        var days = (end - start) / (1000 * 60 * 60 * 24);
        var d = document.getElementById("room3");
        var room3Price = d.value
        $("#totalDays3").val(days + " dni");
        $("#totalPrice3").val(days * room3Price + " zł")
    }
});
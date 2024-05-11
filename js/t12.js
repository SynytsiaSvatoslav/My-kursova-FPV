$(document).ready(function(){

    /* Завдання 1 */
    var handle = $('#custom-handle')
    $('#slider').slider({
        min: 1,
        max: 10,
        create: function(){
            handle.text( $(this).slider('value') )
        },
        slide: function(event, ui){
            handle.text(ui.value)
            $('#mytextarea').text(ui.value+" мотоциклів")
        }
    })

    /* Завдання 2 */
    var dataFormat = 'mm/dd/yy',
        from = $('#from')
                .datepicker({
                    defaultDate: '+1w',
                    changeMonth: true,
                    numberOfMonths:1
                })
                .on('change',function(){
                    to.datepicker('option','minDate', getDate(this) )
                }),
        to = $('#to')
                .datepicker({
                    defaultDate: '+1w',
                    changeMonth: true,
                    numberOfMonths:1
                })
                .on('change',function(){
                    from.datepicker('option','maxDate', getDate(this) )
                })

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dataFormat, element.value)
        } catch (error) {
            date = null;
        }
        return date
    }

    /* Завдання 3 */
    var days = 0;
    to.change(function(){
        var Date1 = new Date ($('.datepicker:first').val());
        var Date2 = new Date ($('.datepicker:last').val());
        days =  Math.floor(((Date2.getTime() - Date1.getTime())/(1000*60*60*24))+1)
        $('#mytextarea').text(function(i, origText){
            return days + " днів " + "\n" + origText
        })
    })

    /* Завдання 4 */
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 1000,
        values: [50,400],
        slide: function(event, ui){
            $('#amount').val(ui.values[0] + ' - ' + ui.values[1] + ' км')
        }
    });
    $('#amount').val(
        $("#slider-range").slider('values',0) + ' - ' 
                + $("#slider-range").slider('values',1) + ' км'
        )


/* ДЗ */
        
//////////////////
        $('#mytextarea').text(function(i, origText){
            return $('#amount').val() + " кілометрів " + "\n" + origText
        })

})
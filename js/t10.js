$(document).ready(function(){

    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
    })

/* TEMA 11 */

// Завдання 1
    $("#my_button").button()
   
// Завдання 2
    $("#clear_form").button();
    $("#clear_form").click(function (event) {
        event.preventDefault();
        $('#div_form_1 input[type=checkbox]').prop('checked', false).button("refresh");
        $('#div_form_1 input[type=radio]').prop('checked', false).button("refresh"); 
        $('input[type=text], textarea').val('');
    })

//Завдання 3
    $('input[type=checkbox]').checkboxradio();
    $('#radio input[type=radio]').checkboxradio();

//Завдання 4
    $("#motoSelect").selectmenu();
    $("#daysSelect").selectmenu();
    
   





})
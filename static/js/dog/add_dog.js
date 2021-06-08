
// FirstName validate

function FirstName(){
    var fund= $("#first_name").val();
    if(fund.length == '' || fund.length == null) {
        $("#first_name").addClass("has-error");
        $("#label_first_name").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 3){
            $("#first_name").addClass("has-error");
            $("#label_first_name").text("Must Contains at least 3 characters");

            $("#label_first_name").show();
            return false;
        }
        else{
        $("#first_name").removeClass("has-error");
        $("#label_first_name").text("");
        return true;
        }
        }
    }
$("#first_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})





// form action when hit check validate

$(document).on('submit', '#add_new_dog_form_id', function(){
    if (FirstName()  == true) {
        return true;
    } else {
        FirstName();
        return false;
    }

}) 

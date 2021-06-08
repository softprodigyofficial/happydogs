/////////////// email function start from here


function AdminEmailForget(){
    var letternumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email=$("#admin_forget_email").val();
    if(email.length == '' || email.length == null) {
        $("#admin_forget_email").removeClass("has-success");
        $("#admin_forget_email").addClass("has-error");
        $("#email_label_forget").text("This Field is required");
        return false;
    }
        else{
            $("#admin_forget_email").addClass("has-success");
            $("#email_label_forget").text("");
            return true;            
        }
    }

$("#admin_forget_email").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////////// email function end here



// form action when hit check validate

$(document).on('submit', '#admin_panel_forget_form', function(){
    if (AdminEmailForget() == true) {
        return true;
    } else {
        AdminEmailForget();
        return false;
    }

}) 

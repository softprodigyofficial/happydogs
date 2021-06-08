
// password validate

function AdminPasswordLogin(){
    var password= $("#admin_login_passwowrd").val();
    if(password.length == '' || password.length == null) {
        $("#admin_login_passwowrd").addClass("has-error");
        $("#password_label_msg").show();

        $("#password_label_msg").text("This Field is required");
        return false;
    }
    else{
        if(password.length < 6){
            $("#admin_login_passwowrd").addClass("has-error");
            $("#password_label_msg").show();

            $("#password_label_msg").text("It must contains minmum 6 characters");
            return false;
        }
        else{
        
        $("#admin_login_passwowrd").removeClass("has-error");
        $("#password_label_msg").hide();
        $("#password_label_msg").text("");
        return true;
        }
        }
    }
$("#admin_login_passwowrd").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


// end password validate

/////////////// email function start from here


function AdminEmailLogin(){
    var letternumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email=$("#admin_login_email").val();
    if(email.length == '' || email.length == null) {
        $("#admin_login_email").removeClass("has-success");
        $("#admin_login_email").addClass("has-error");
        $("#email_label_msg").text("This Field is required");
        return false;
    }
        else{
            $("#admin_login_email").addClass("has-success");
            $("#email_label_msg").text("");
            return true;            
        }
    }

$("#admin_login_email").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////////// email function end here



// form action when hit check validate

$(document).on('submit', '#admin_panel_login_form', function(){
    if (AdminPasswordLogin()  &&
        AdminEmailLogin() == true) {
        return true;
    } else {
        AdminPasswordLogin();
        AdminEmailLogin();

        return false;
    }

}) 

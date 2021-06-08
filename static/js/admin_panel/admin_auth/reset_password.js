
// password validate

function AdminPassword(){
    var password= $("#admin_password").val();
    if(password.length == '' || password.length == null) {
        $("#admin_password").addClass("has-error");
        $("#password_label_forget").show();

        $("#password_label_forget").text("This Field is required");
        return false;
    }
    else{
        if(password.length < 6){
            $("#admin_password").addClass("has-error");
            $("#password_label_forget").show();

            $("#password_label_forget").text("It must contains minmum 6 characters");
            return false;
        }
        else{
        
        $("#admin_password").removeClass("has-error");
        $("#password_label_forget").hide();
        $("#password_label_forget").text("");
        return true;
        }
        }
    }
$("#admin_password").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


// end password validate

/////////////// confirm password function start from here
function AdminConfirmPassword() {
    var password = $("#admin_password").val()
    var confirm_pas = $("#confirm_password_reset").val()
    if (confirm_pas.length == null || confirm_pas.length == "") {
        $("#conf_password_reset_label").show();

        $("#confirm_password_reset").addClass("has-error");
        $("#conf_password_reset_label").text("This Field is required");
        return false;
    } 
    else {
        if(confirm_pas != password) {
            $("#confirm_password_reset").addClass("has-error");
            $("#conf_password_reset_label").show();
            $("#conf_password_reset_label").text("Password is not match");
            return false;
        } 
        else {
            $("#confirm_password_reset").removeClass("has-error");
            $("#conf_password_reset_label").hide();
            $("#conf_password_reset_label").text("");
            return true;
            }
        }

}

$("#confirm_password_reset").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////////// confirm password function end here



/// otp function start here

function OtpPassword(){
    var otp_time_check=$("#reset_otp").val();
    if(otp_time_check.length == '' || otp_time_check.length == null) {
        $("#reset_otp").removeClass("has-success");
        $("#reset_otp").addClass("has-error");
        $("#otp_label_reset").show();

        $("#otp_label_reset").text("This Field is required");
        return false;
    }
    else{
        $("#reset_otp").addClass("has-success");
        $("#otp_label_reset").show();
        $("#otp_label_reset").text("");
        return true;

    }
    
    }


$("#reset_otp").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

//// otp function end here





/////

function Numbervalidate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

/////
// form action when hit check validate

$(document).on('submit', '#admin_panel_reset_form', function(){
    if (AdminPassword()  && AdminConfirmPassword() && OtpPassword() == true) {
        return true;
    } else {
        AdminPassword();
        AdminConfirmPassword();
        OtpPassword();

        return false;
    }

}) 

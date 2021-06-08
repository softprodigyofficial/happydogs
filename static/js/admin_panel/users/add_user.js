function FirstNameCheck(){
    var letternumber = /^[a-zA-Z]+$/;
    var first_name=$("#inputFirstName_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#inputFirstName_found").removeClass("has-success");
        $("#inputFirstName_found").addClass("has-error");
        $("#label_frst_name1_found").text("This Field is required");
        
        return false;
    }
    else{
        if (first_name.length >15 || first_name.length <3){
            $("#inputFirstName_found").removeClass("has-success");
            $("#inputFirstName_found").addClass("has-error");
            $("#label_frst_name1_found").text("It only contains 3 to 15 characters");
            return false;
        }
        else{
            if(first_name.match(letternumber)){
                $("#inputFirstName_found").addClass("has-success");
                $("#label_frst_name1_found").text("");
                return true;
            }
            else{
                $("#inputFirstName_found").removeClass("has-success");
                $("#inputFirstName_found").addClass("has-error");
                $("#label_frst_name1_found").text("It only contains 3 to 15 characters");
                return false;
            }
        }
    }
}
$("#inputFirstName_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


////
function LastNameCheck(){
    var letternumber = /^[a-zA-Z]+$/;
    var first_name=$("#name_last").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#name_last").removeClass("has-success");
        $("#name_last").addClass("has-error");
        $("#age_label_found").text("This Field is required");
        
        return false;
    }
    else{
        if (first_name.length >15 || first_name.length <3){
            $("#name_last").removeClass("has-success");
            $("#name_last").addClass("has-error");
            $("#age_label_found").text("It only contains 3 to 15 characters");
            return false;
        }
        else{
            if(first_name.match(letternumber)){
                $("#name_last").addClass("has-success");
                $("#age_label_found").text("");
                return true;
            }
            else{
                $("#name_last").removeClass("has-success");
                $("#name_last").addClass("has-error");
                $("#age_label_found").text("It only contains 3 to 15 characters");
                return false;
            }
        }
    }
}
$("#name_last").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


//////////////

function Email_check_login(){
    var letternumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email=$("#emai_address_admin").val();
    if(email.length == '' || email.length == null) {
        $("#emai_address_admin").removeClass("has-success");
        $("#emai_address_admin").addClass("has-error");
        $("#email_address_label").text("This Field is required");
        return false;
    }
        else{
            if(email.match(letternumber)){
            $("#emai_address_admin").addClass("has-success");
            $("#email_address_label").text("");
            return true;
            }
        else{
            $("#emai_address_admin").removeClass("has-success");
            $("#emai_address_admin").addClass("has-error");
            $("#email_address_label").text("please enter a valid email address");
            return false;
            }
            
        }
    }

$("#emai_address_admin").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////


function Password_login(){
    var password= $("#password_add").val();
    if(password.length == '' || password.length == null) {
        $("#password_add").removeClass("has-success");
        $("#password_add").addClass("has-error");
        $("#password_label").text("This Field is required");
        return false;
    }
    else{
        if(password.length < 8){
            $("#password_add").addClass("has-error");
            $("#password_label").show();

            $("#password_label").text("It must contains minmum 8 characters");
            return false;
        }
        else{
        
        $("#password_add").addClass("has-success");
        $("#password_label").text("");
        return true;
        }
        
        }
    }
$("#password_add").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})
/////


//////

/////



////////////////


function PasswordConfirmCheck() {
    var password = $("#password_add").val()
    var confirm_pas = $("#confirm_password").val()
    if (confirm_pas.length == null || confirm_pas.length == "") {
        $("#confirm_password").removeClass("has-success");
        $("#confirm_password").addClass("has-error");
        $("#add_contact_label_countary_found").text("This Field is required");
        

        return false;
    } 
    else {
        if(confirm_pas != password) {
            $("#confirm_password").removeClass("has-success");
            $("#confirm_password").addClass("has-error");
            $("#add_contact_label_countary_found").text("Password is not match");
            return false;
        } 
        else {
            $("#confirm_password").removeClass("has-error");
            $("#confirm_password").addClass("has-success");
            $("#add_contact_label_countary_found").text("");
            return true;
            }
        }

}

$("#confirm_new_eepsw").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



////////


/////

$(document).on('change', '#role_id', function(){
  if($(this).val() == 'Select')  {
    $("#role_id").removeClass("has-success");
    $("#role_id").addClass("has-error");
    $("#role_label").text("This Field is Required");
    return false;
}
    else{
        $("#role_id").removeClass("has-error");
        $("#role_id").addClass("has-success");
        $("#role_label").text("");
        return true

    }
})
//////////


function CheckRoling(){
  if($("#role_id").val() == 'Select')  {
    $("#role_id").removeClass("has-success");
    $("#role_id").addClass("has-error");
    $("#role_label").text("This Field is Required");
    return false;
}
    else{
        $("#role_id").removeClass("has-error");
        $("#role_id").addClass("has-success");
        $("#role_label").text("");
        return true ;

    }
}


/////


/////// validate phone


function validatePhone(){
    var legal =$("#phone_display").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#phone_display").removeClass("has-success");
        $("#phone_display").addClass("has-error");
        $("#phone_display").show();
        $("#phone_label").text("This Field is required");
        return false;
    }
    else{
        if (legal.match(letterNumber)) {
            if (legal.length > 15 || legal.length < 10) {
                $("#phone_display").addClass("has-error");
                $("#phone_label").show();
                $("#phone_label").text("Invalid");
                return false;
            }
            else{
                $("#phone_display").removeClass("has-error");
                $("#phone_label").hide();
                $("#phone_label").text("");
                return true;
            }
        }else{
            $("#phone_display").show();
            $("#phone_display").addClass("has-error");
            $("#phone_label").text("Invalid");
            return false;
        }
    }
}

///// validate city
function validateCity(){
    var legal =$("#city").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#city").removeClass("has-success");
        $("#city").addClass("has-error");
        $("#city_label").text("This Field is Required");
        return false;
    }
    else{
        $("#city").removeClass("has-error");
        $("#city_label").text("");
        return true;
    }
}
// ////

///// validate city
function WebsiteValidate(){
    var legal =$("#website").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#website").removeClass("has-success");
        $("#website").addClass("has-error");
        $("#Website_found").text("This Field is Required");
        return false;
    }
    else{
        $("#website").removeClass("has-error");
        $("#Website_found").text("");
        return true;
    }
}
// ////

///// validate title
function TitleValidate(){
    var legal =$("#title").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#title").removeClass("has-success");
        $("#title").addClass("has-error");
        $("#title_check").text("This Field is Required");
        return false;
    }
    else{
        $("#title").removeClass("has-error");
        $("#title_check").text("");
        return true;
    }
}
// ////

///// validate Linkedin
function LinkedinCheck(){
    var legal =$("#linkedin").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#linkedin").removeClass("has-success");
        $("#linkedin").addClass("has-error");
        $("#label_linkedin").text("This Field is Required");
        return false;
    }
    else{
        $("#linkedin").removeClass("has-error");
        $("#label_linkedin").text("");
        return true;
    }
}
// ////


///// validate Linkedin
function BiggerPocketCheck(){
    var legal =$("#bigger_pockets").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#bigger_pockets").removeClass("has-success");
        $("#bigger_pockets").addClass("has-error");
        $("#bigger_pockets_found").text("This Field is Required");
        return false;
    }
    else{
        $("#bigger_pockets").removeClass("has-error");
        $("#bigger_pockets_found").text("");
        return true;
    }
}
// ////

///// validate Facebook
function Facebook(){
    var legal =$("#Facebook").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#Facebook").removeClass("has-success");
        $("#Facebook").addClass("has-error");
        $("#facebook_found").text("This Field is Required");
        return false;
    }
    else{
        $("#Facebook").removeClass("has-error");
        $("#facebook_found").text("");
        return true;
    }
}
// ////


$("#add_user_by_Admin").on('submit', function(){
    if (validatePhone() && validateCity() && WebsiteValidate() && TitleValidate() && LinkedinCheck() && Facebook() && BiggerPocketCheck() && FirstNameCheck() && LastNameCheck() && Email_check_login() && Password_login() && PasswordConfirmCheck() && CheckRoling() == true){
        return true;
    }
    else{
        FirstNameCheck();
        Facebook();
        LastNameCheck();
        Email_check_login();
        Password_login();
        PasswordConfirmCheck();
        CheckRoling();
        BiggerPocketCheck();
        LinkedinCheck();
        TitleValidate();
        validatePhone();
        validateCity();
        WebsiteValidate();
        return false;
    }
})


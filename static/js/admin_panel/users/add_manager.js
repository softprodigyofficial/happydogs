function NameCheck(){
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
                $("#inputFirstName_found").addClass("has-success");
                $("#label_frst_name1_found").text("");
                return true;
        }
    }
}
$("#inputFirstName_found").focusout(function () {
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

///// validate website
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
///// validate YEar Established
function YearEstablished(){
    var legal =$("#year").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#year").removeClass("has-success");
        $("#year").addClass("has-error");
        $("#year_label").text("This Field is Required");
        return false;
    }
    else{
        $("#year").removeClass("has-error");
        $("#year_label").text("");
        return true;
    }
}
// ////
///// validate address
function AddressName(){
    var legal =$("#address").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#address").removeClass("has-success");
        $("#address").addClass("has-error");
        $("#address_label").text("This Field is Required");
        return false;
    }
    else{
        $("#address").removeClass("has-error");
        $("#address_label").text("");
        return true;
    }
}
// ////

///// validate zipcode
function ZipName(){
    var legal =$("#zipname").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#zipname").removeClass("has-success");
        $("#zipname").addClass("has-error");
        $("#zip_label").text("This Field is Required");
        return false;
    }
    else{
        $("#zipname").removeClass("has-error");
        $("#zip_label").text("");
        return true;
    }
}
// ////


///// validate state
function StateNameValidate(){
    var legal =$("#state_name").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#state_name").removeClass("has-success");
        $("#state_name").addClass("has-error");
        $("#state_name_label").text("This Field is Required");
        return false;
    }
    else{
        $("#state_name").removeClass("has-error");
        $("#state_name_label").text("");
        return true;
    }
}
// ////


$("#add_manager_form").on('submit', function(){
    if (StateNameValidate() && ZipName() && AddressName() && YearEstablished() && WebsiteValidate() && validateCity() && validatePhone() && Password_login() && Email_check_login() && NameCheck() == true){
        return true;
    }
    else{
        StateNameValidate();
        ZipName();
        AddressName();
        YearEstablished();
        WebsiteValidate();
        validateCity();
        validatePhone();
        Password_login();
        Email_check_login();
        NameCheck();
        return false;
    }
})


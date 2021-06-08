
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
function ClaimedBy(){
  if($("#claimed_by").val() == '')  {
    $("#claimed_by").removeClass("has-success");
    $("#claimed_by").addClass("has-error");
    $("#claimed_by_label").text("This Field is Required");
    return false;
}
    else{
        $("#claimed_by").removeClass("has-error");
        $("#claimed_by").addClass("has-success");
        $("#claimed_by_label").text("");
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

///// validate ClaimDetail
function ClaimDetail(){
    var legal =$("#detail_claim").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#detail_claim").removeClass("has-success");
        $("#detail_claim").addClass("has-error");
        $("#detail_claim_label").text("This Field is Required");
        return false;
    }
    else{
        $("#detail_claim").removeClass("has-error");
        $("#detail_claim_label").text("");
        return true;
    }
}
/////////////


$("#claim_form_id").on('submit', function(){
    if (validatePhone() && ClaimedBy() && ClaimDetail() && FirstNameCheck() && LastNameCheck() && Email_check_login() == true){
        return true;
    }
    else{
        FirstNameCheck();
        ClaimedBy();
        LastNameCheck();
        Email_check_login();
        ClaimDetail();
        validatePhone();
        return false;
    }
})


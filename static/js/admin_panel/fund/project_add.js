
// Project name validate

function ProjectName(){
    var fund= $("#project_names").val();
    if(fund.length == '' || fund.length == null) {
        $("#project_names").addClass("has-error");
        $("#project_names_label").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#project_names").addClass("has-error");
            $("#project_names_label").text("Must Contains at least 6 characters");

            $("#project_names_label").show();
            return false;
        }
        else{
        $("#project_names").removeClass("has-error");
        $("#project_names_label").text("");
        return true;
        }
        }
    }
$("#project_names").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



function AssetClass() {
    var assets = $("#assets_class").val()
    console.log("assets is ---->", assets)
    if (assets.length == "") {

        $("#assets_class").addClass("has-error");
        $("#assets_class_label").text("This Field is required");
        return false;
    } 
        else {
            $("#assets_class").removeClass("has-error");
            $("#assets_class_label").text("");
            return true;
            }

}

$("#assets_class").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

////
function PropertyType() {
    var assets = $("#property_type").val()
    if (assets.length == "") {
        $("#property_type").addClass("has-error");
        $("#property_type_label").text("This Field is required");
        return false;
    } 
    else {
        $("#property_type").removeClass("has-error");
        $("#property_type_label").text("");
        return true;
        }

}

$("#property_type").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})
///


///// validate AddressName
function AddressName(){
    var legal =$("#address_id").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#address_id").removeClass("has-success");
        $("#address_id").addClass("has-error");
        $("#address_idlabel").text("This Field is Required");
        return false;
    }
    else{
        $("#address_id").removeClass("has-error");
        $("#address_idlabel").text("");
        return true;
    }
}
// ////

///// validate CityName
function CityName(){
    var legal =$("#city_id").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#city_id").removeClass("has-success");
        $("#city_id").addClass("has-error");
        $("#city_id_label").text("This Field is Required");
        return false;
    }
    else{
        $("#city_id").removeClass("has-error");
        $("#city_id_label").text("");
        return true;
    }
}
// ////

///// validate AddressName
function StateName(){
    var legal =$("#state_id").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#state_id").removeClass("has-success");
        $("#state_id").addClass("has-error");
        $("#state_id_label").text("This Field is Required");
        return false;
    }
    else{
        $("#state_id").removeClass("has-error");
        $("#state_id_label").text("");
        return true;
    }
}
// ////
///// validate AddressName
function Opportunity(){
    var legal =$("#tract_number").val();
    var letterNumber = /^[+0-9 ]*$/;
    if(legal.length == '' || legal.length == null) {
        $("#tract_number").removeClass("has-success");
        $("#tract_number").addClass("has-error");
        $("#tract_number_label").text("This Field is Required");
        return false;
    }
    else{
        $("#tract_number").removeClass("has-error");
        $("#tract_number_label").text("");
        return true;
    }
}
// ////

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
// 


function EmailValidate(){
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

function CheckingImage(){
    var image_val = $("#logo_company").val();
    if (image_val == '' || image_val == null){
        $("#logo_company_label").text("required");
        return false;
    }
    else{
        $("#logo_company_label").text("")
        return true;
    }
}

// form action when hit check validate

$(document).on('submit', '#project_type_status_Form', function(){
    if (CheckingImage() && EmailValidate() && Opportunity() && validatePhone() && StateName() && ProjectName() && PropertyType() && AssetClass() && AddressName() && CityName()  == true) {
        return true;
    } else {
        CheckingImage();
        EmailValidate();
        ProjectName();
        Opportunity();
        validatePhone();
        PropertyType();
        AssetClass();
        AddressName();
        CityName();
        StateName();
        return false;
    }

}) 



// 
function ReadPhoto(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      var getimgfield = $(input).closest('div').
      next('div').find('img');
      $("#display_none").hide();
      $("#logo_company_label").text("")

      reader.onload = function(e) {

         $("#logo_image_show").show();
         $('#logo_image_show').attr('src', e.target.result).width(130).height(100);
      }
      reader.readAsDataURL(input.files[0]);
   }
}


// 

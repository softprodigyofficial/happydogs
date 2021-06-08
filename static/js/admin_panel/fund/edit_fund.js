
// fund name validate

function FundName(){
    var fund= $("#fund_name").val();
    if(fund.length == '' || fund.length == null) {
        $("#fund_name").addClass("has-error");
        $("#label_fund_name").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#fund_name").addClass("has-error");
            $("#label_fund_name").text("Must Contains at least 6 characters");

            $("#label_fund_name").show();
            return false;
        }
        else{
        $("#fund_name").removeClass("has-error");
        $("#label_fund_name").text("");
        return true;
        }
        }
    }
$("#fund_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



// fund manager name validate

function FundManagerName(){
    var fund= $("#fund_manager").val();
    if(fund.length == '' || fund.length == null) {
        $("#fund_manager").addClass("has-error");
        $("#fund_manager_label").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#fund_manager").addClass("has-error");
            $("#fund_manager_label").show();
            return false;
        }
        else{
        $("#fund_manager").removeClass("has-error");
        $("#fund_manager_label").text("");
        return true;
        }
        }
    }
$("#fund_manager").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

// fund manager name

// assests classes validate

/////////////// confirm password function start from here
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

///////////assets classes  function end here



/// fund size function start here

function FundSize(){
    var fund_sze =$("#fund_size").val();
    if(fund_sze.length == '' || fund_sze.length == null) {
        $("#fund_size").removeClass("has-success");
        $("#fund_size").addClass("has-error");
        $("#fund_size_label").text("This Field is required");
        return false;
    }
    else{
        $("#fund_size").addClass("has-success");
        $("#fund_size_label").text("");
        return true;

    }
}


$("#fund_size").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

//// fund size function end here



/// MinimumInvestment function start here

function MinimumInvestment(){
    var fund_sze =$("#minimum_investment").val();
    if(fund_sze.length == '' || fund_sze.length == null) {
        $("#minimum_investment").removeClass("has-success");
        $("#minimum_investment").addClass("has-error");
        $("#minimum_investment_label").text("This Field is required");
        return false;
    }
    else{
        $("#minimum_investment").addClass("has-success");
        $("#minimum_investment_label").text("");
        return true;

    }
}


$("#minimum_investment").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

//// MinimumInvestment size function end here


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


// 
function read_logo_company(input) {
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


// 
function featured_image_real(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      var getimgfield = $(input).closest('div').
      next('div').find('img');
      $("#featured_image_real_show").hide();
      $("#featured_image_label").text("")

      reader.onload = function(e) {
         $("#featured_image_show_here").show();
         $('#featured_image_show_here').attr('src', e.target.result).width(130).height(100);
      }
      reader.readAsDataURL(input.files[0]);
   }
}

// 




 function AgeMustBeLess(id){
  
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd
  } 
  if(mm<10){
      mm='0'+mm
  } 
 
  today = yyyy+'-'+mm+'-'+dd;
  document.getElementById(id).setAttribute("max", today);
 
 }
         



////

// phone number validate

function PhoneNumber(){
    var fund= $("#phone_number").val();
    if(fund.length == '' || fund.length == null) {
        $("#phone_number").addClass("has-error");
        $("#phone_number_label").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#phone_number").addClass("has-error");
            $("#phone_number_label").show();
            return false;
        }
        else{
        $("#phone_number").removeClass("has-error");
        $("#phone_number_label").text("");
        return true;
        }
        }
    }
$("#phone_number").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



/// email  vaildate here

function EmailValidate(){
    var letternumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email=$("#id_email").val();
    if(email.length == '' || email.length == null) {
        $("#id_email").removeClass("has-success");
        $("#id_email").addClass("has-error");
        $("#email_label").text("This Field is required");
        return false;
    }
        else{
            if(email.match(letternumber)){
            $("#id_email").addClass("has-success");
            $("#email_label").text("");
            return true;
            }
        else{
            $("#id_email").removeClass("has-success");
            $("#id_email").addClass("has-error");
            $("#email_label").text("please enter a valid email address");
            return false;
            }
            
        }
    }

$("#id_email").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



// social media link
function SocialMediaLink(){
    var fund= $("#social_media").val();
    if(fund.length == '' || fund.length == null) {
        $("#social_media").addClass("has-error");
        $("#social_media_label").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#social_media").addClass("has-error");
            $("#social_media_label").show();
            return false;
        }
        else{
        $("#social_media").removeClass("has-error");
        $("#social_media_label").text("");
        return true;
        }
        }
    }
$("#social_media").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

// mailing address

function MailingAddress(){
    var fund= $("#mailing_address").val();
    if(fund.length == '' || fund.length == null) {
        $("#mailing_address").addClass("has-error");
        $("#mailing_address_label").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#mailing_address").addClass("has-error");
            $("#mailing_address_label").show();
            return false;
        }
        else{
        $("#mailing_address").removeClass("has-error");
        $("#mailing_address_label").text("");
        return true;
        }
        }
    }
$("#mailing_address").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})




// form action when hit check validate

$(document).on('submit', '#fund_form_id', function(){
    if (FundName() && MailingAddress() && SocialMediaLink() && FundManagerName() && EmailValidate() && PhoneNumber() && FundSize() && MinimumInvestment() == true) {
        return true;
    } else {
        FundName();
        EmailValidate();
        FundSize();
        FundManagerName();
        PhoneNumber();
        SocialMediaLink();
        MinimumInvestment();
        MailingAddress();

        return false;
    }

}) 

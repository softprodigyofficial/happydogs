
// fund_type name validate

function FundType(){
    var fund= $("#fund_type").val();
    if(fund.length == '' || fund.length == null) {
        $("#fund_type").addClass("has-error");
        $("#fund_type_name").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#fund_type").addClass("has-error");
            $("#fund_type_name").text("Must Contains at least 6 characters");

            $("#fund_type_name").show();
            return false;
        }
        else{
        $("#fund_type").removeClass("has-error");
        $("#fund_type_name").text("");
        return true;
        }
        }
    }
$("#fund_type").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})





// form action when hit check validate

$(document).on('submit', '#fund_type_status_Form', function(){
    if (FundType() == true) {
        return true;
    } else {
        FundType();
        return false;
    }

}) 

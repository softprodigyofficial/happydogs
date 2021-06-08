
// asset name validate

function AssetName(){
    var fund= $("#asset_name").val();
    if(fund.length == '' || fund.length == null) {
        $("#asset_name").addClass("has-error");
        $("#label_asset_name").text("This Field is required");
        return false;
    }
    else{
        if(fund.length < 6){
            $("#asset_name").addClass("has-error");
            $("#label_asset_name").text("Must Contains at least 6 characters");

            $("#label_asset_name").show();
            return false;
        }
        else{
        $("#asset_name").removeClass("has-error");
        $("#label_asset_name").text("");
        return true;
        }
        }
    }
$("#asset_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



// form action when hit check validate

$(document).on('submit', '#asset_form_id', function(){
    if (AssetName() == true) {
        return true;
    } else {
        AssetName();
        return false;
    }

}) 

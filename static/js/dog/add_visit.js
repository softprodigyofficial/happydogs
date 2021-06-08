
function DogChecking(){
    var dog= $("#dog").val();
    if(dog) {
        $("#dog").removeClass("has-error");
        $("#dog_label").text("");
        return true;

    }
    else{

        $("#dog").addClass("has-error");
        $("#dog_label").text("This Field is required");
        return false;

        }
    }



function StartDate(){
    var fund= $("#start_date").val();
    if(fund) {
        $("#start_date").removeClass("has-error");
        $("#label_start_date").text("");
        return true;
    }
    else{
        $("#start_date").addClass("has-error");
        $("#label_start_date").text("This Field is required");
        return false;

        }
    }


function EndDate(){
    var fund= $("#end_date").val();
    if(fund) {
        $("#end_date").removeClass("has-error");
        $("#label_end_date").text("");
        return true;
    }
    else{
        $("#end_date").addClass("has-error");
        $("#label_end_date").text("This Field is required");
        return false;

        }
    }

// form action when hit check validate

$(document).on('submit', '#add_new_visit_form_id', function(){
    if (EndDate() && StartDate() && DogChecking()  == true) {
        return true;
    } else {
        EndDate();
        StartDate();
        DogChecking();
        return false;
    }

}) 

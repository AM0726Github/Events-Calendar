$(document).ready(function(){
    // global variabes declaration
    var i = 0;
    var today = moment();
    // Changing paragraph text by todays date
    $("#currentDay").text(today.format("dddd, Do MMMM, YYYY ")); 
   
    // Adding logics to .savebtn class battons to save data in local storage
    $(".saveBtn").on("click", function(){
        i = 0;
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);

    }); 

    // Loading data from lockal storage each time refreshing page
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    
    // Adding time changeing logics to event row's  for dinamically change collors
    function timeChange(){
        // debugger;
        var currentHour = today.hour(); 
        i++;

        $("#UpdateStatus").text("Last Apdated  " + parseInt(i)  + " Seconds ago");
        
        $('.time-block').each(function(){
            var idTime = parseInt($(this).attr("id"));
            if (idTime < currentHour){
                $(this).addClass("past");
            } else if (idTime === currentHour){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }

    // Calling time changing function by 1 second interval
    var intervalID = setInterval(timeChange,1000);
});


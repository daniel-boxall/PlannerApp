$(document).ready(function () {
    
    //Moment.js code for current date and time
    let NowMoment = moment().format("dddd MMMM Do YYYY");
   
    
    let currentHour = moment().format("HH");
    // Display current day in header
    var currentDay = moment().format('dddd MMMM Do YYYY');
    $('#currentDay').text(currentDay);

    $("#clearFieldsBtn").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
    });

    //grabs hour from each time slot and compares it to actual time
    $(".time-div").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];
        
        if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
        } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
        }
    });
    // Save the event in local storage when save button is clicked in that timeblock
    
    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    // persists events between refreshes of a page
    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));


});




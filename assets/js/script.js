// To add today's date to the header
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);




// To change time to read as military time - H = without leading 0
var militaryTime = parseInt(moment().format('H'));
console.log(militaryTime)


// // Formating so that the current time is in red, future in green, and past in grey
$("textarea").each(function() {
    var timeSlot = parseInt($(this).attr("data"));
    if (militaryTime === timeSlot) {
        $(this).addClass("present");
    } 
    if (militaryTime < timeSlot) {
        $(this).addClass("future");
    } 
    if (militaryTime > timeSlot) {
        $(this).addClass("past")
    }
})




//Defining variable for save buttons
//var saveBtn = document.querySelectorAll(".saveBtn btn btn-primary col-1")

// var nineAmBox = document.getElementById("#nine-am")
// var nineAmBox = document.getElementById("#nine-am")



// $("button").on("click", function(){
//     localStorage.setItem("nine", nineAmBox.val())


// })




// $("#nine-am").children(".hour col-1").val(localStorage.getItem("nine"));





// 9am timeslot
$("button").on("click", function(){
    var currentBox9 = parseInt($(this).parent().attr("data"));
    var currentMessage9 = $("#nine-am").val();

    localStorage.setItem("currentBox9", currentMessage9)
    //console.log(currentBox9, currentMessage)
})

$("#nine-am").append(localStorage.getItem("currentBox9"));



$("button").on("click", function(){
    var currentBox10 = parseInt($(this).parent().attr("data"));
    var currentMessage10 = $("#ten-am").val();

    localStorage.setItem("currentBox10", currentMessage10)
    
})

$("#ten-am").append(localStorage.getItem("currentBox10"));











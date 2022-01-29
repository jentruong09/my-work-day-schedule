// To add today's date to the header
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);




// To change time to read as military time - H = without leading 0
var militaryTime = parseInt(moment().format('H'));
console.log(militaryTime)


// // Formating so that the current time is in red, future in green, and past in grey
$("textarea").each(function() {
    var timeSlot = parseInt($(this).attr("data"));
    // Making the present time slots red
    if (militaryTime === timeSlot) {
        $(this).addClass("present");
    } 
    // Making the future time slots green
    if (militaryTime < timeSlot) {
        $(this).addClass("future");
    } 
    // Making the present time slots grey
    if (militaryTime > timeSlot) {
        $(this).addClass("past")
    }
})




// On click, messages will save to local storage and will stay even when page is refreshed
// 9am timeslot message
$("button").on("click", function(){
    var currentBox9 = parseInt($(this).parent().attr("data"));
    var currentMessage9 = $("#nine-am").val();

    localStorage.setItem("currentBox9", currentMessage9)
    //console.log(currentBox9, currentMessage)
})

$("#nine-am").append(localStorage.getItem("currentBox9"));


// 10am timeslot message
$("button").on("click", function(){
    var currentBox10 = parseInt($(this).parent().attr("data"));
    var currentMessage10 = $("#ten-am").val();

    localStorage.setItem("currentBox10", currentMessage10)
    
})

$("#ten-am").append(localStorage.getItem("currentBox10"));



// 11am timeslot message
$("button").on("click", function(){
    var currentBox11 = parseInt($(this).parent().attr("data"));
    var currentMessage11 = $("#eleven-am").val();

    localStorage.setItem("currentBox11", currentMessage11)
    
})

$("#eleven-am").append(localStorage.getItem("currentBox11"));


// 12pm timeslot message
$("button").on("click", function(){
    var currentBox12 = parseInt($(this).parent().attr("data"));
    var currentMessage12 = $("#twelve-pm").val();

    localStorage.setItem("currentBox12", currentMessage12)
    
})

$("#twelve-pm").append(localStorage.getItem("currentBox12"));


// 1pm timeslot message
$("button").on("click", function(){
    var currentBox13 = parseInt($(this).parent().attr("data"));
    var currentMessage13 = $("#thirteen-pm").val();

    localStorage.setItem("currentBox13", currentMessage13)
    
})

$("#thirteen-pm").append(localStorage.getItem("currentBox13"));


// 2pm timeslot message
$("button").on("click", function(){
    var currentBox14 = parseInt($(this).parent().attr("data"));
    var currentMessage14 = $("#fourteen-pm").val();

    localStorage.setItem("currentBox14", currentMessage14)
    
})

$("#fourteen-pm").append(localStorage.getItem("currentBox14"));


// 3pm timeslot message
$("button").on("click", function(){
    var currentBox15 = parseInt($(this).parent().attr("data"));
    var currentMessage15 = $("#fifteen-pm").val();

    localStorage.setItem("currentBox15", currentMessage15)
    
})

$("#fifteen-pm").append(localStorage.getItem("currentBox15"));


// 4pm timeslot message
$("button").on("click", function(){
    var currentBox16 = parseInt($(this).parent().attr("data"));
    var currentMessage16 = $("#sixteen-pm").val();

    localStorage.setItem("currentBox16", currentMessage16)
    
})

$("#sixteen-pm").append(localStorage.getItem("currentBox16"));


// 5pm timeslot message
$("button").on("click", function(){
    var currentBox17 = parseInt($(this).parent().attr("data"));
    var currentMessage17 = $("#seventeen-pm").val();

    localStorage.setItem("currentBox17", currentMessage17)
    
})

$("#seventeen-pm").append(localStorage.getItem("currentBox17"));
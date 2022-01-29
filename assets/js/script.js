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
var saveBtn = document.querySelectorAll(".saveBtn btn btn-primary col-1")
var texts = document.querySelectorAll("textarea")
var nineAM = document.querySelector("#9am")

function saveAllText(event) {
    event.preventDefault();
    localStorage.setItem("nineAM", $(nineAM.textContent()));
}







$(".saveBtn btn btn-primary col-1").click(function(event){
    saveAllText(event)
})




// saveBtn.addEventListener("click", function(event) {
//     saveAllText(event);

// });




// //var amount = document.getElementsByClassName(".row time-block")
// var amount = $(".row time-block")
// console.log(amount.length)

// for (var i = 0; i < amount.length; i++) {
//     let scheduleTime = ($(amount[i]).children(".hour col-1"))//.attr("data"))
//     console.log(scheduleTime)

//     if (scheduleTime === military) {
//         $(".description col-10").addClass("present")
//     }

// }









//var scheduleTime = 

// $("textarea").each(function() {
//     var scheduleTime = parseInt($("id").attr(""));
//     console.log(scheduleTime)
// })





// var color = document.querySelectorAll('.description col-10')

// var currentHour = moment().hours()
// console.log(currentHour)


// var scheduleTime = document.querySelector('.hour col-1')
// console.log(scheduleTime)
// var hour = scheduleTime.getAttribute('data-value')
// console.log(hour)
// // var scheduleTime = document.querySelectorAll('.time-number').textContent
// // console.log(scheduleTime)

// var plannerTime = document.querySelector('.time-number') // This is not a number, figure out what to do!
// console.log(currentHour)
// console.log(plannerTime)


// function setTimeColor() {
//     if (currentHour == scheduleTime) {
//         color.attr('class', 'present')
//     }
// }


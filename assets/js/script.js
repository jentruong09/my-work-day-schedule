// To add today's date to the header
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);




// To change time to read as military time
var military = parseInt(moment().format('HH'));
console.log(military)


// // Formating so that the current time is in red, future in green, and past in grey
$("textarea").each(function() {
    var timeSlot = parseInt($(this).attr("data"));
    if (military === timeSlot) {
        $(this).addClass("present");
    } 
    if (military < timeSlot) {
        $(this).addClass("future");
    } 
    if (military > timeSlot) {
        $(this).addClass("past")
    }
})







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


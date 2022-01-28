// To add today's date to the header
var today = moment().format('dddd, MMMM Do');
$("#currentDay").text(today);



var color = document.querySelectorAll('.description col-10')


var currentHour = moment().hours()
var plannerTime = document.querySelector('.time-block') // This is not a number, figure out what to do!
console.log(currentHour)


// Formating so that the current time is in red, future in green, and past in grey
function setTimeColor() {
    if (currentHour === plannerTime) {
        color.attr('class', 'present')
    }
}


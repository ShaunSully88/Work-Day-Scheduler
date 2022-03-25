//Today's Date displayed on main page
var todayDate =moment().format('dddd, MMM Do YYYY');
$("#today").html(todayDate);
console.log(todayDate);

//Today's time
var todayTime =moment().format('LT');
$("#time").html(todayTime);
console.log(todayTime);

var textArea = document.getElementById('textArea')

//Timeblock time
var dateTime = document.getElementById('dateTime');



if(dateTime < todayTime) {
    textArea.classList.add("future")
};

if(dateTime === todayTime) {
    textArea.classList.add("present")
};

if(dateTime > todayTime) {
    textArea.classList.add("past")
};


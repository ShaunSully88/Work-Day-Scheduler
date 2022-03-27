//Today's Date displayed on main page
var todayDate =moment().format('dddd, MMM Do YYYY');
$("#today").html(todayDate);
console.log(todayDate);

//Today's time
var todayTime =moment().format('LT');
$("#time").html(todayTime);
console.log(todayTime);

 
//Timeblock time


var scheduleTime = function() {
    var hour= moment().hours();
    console.log(hour)
for (var i = 9; i <= 17; i++){
     var taskEl = document.getElementById("hour-" + i);
    console.log(taskEl)   
if(i > hour) {
    $(taskEl).addClass('future');
}
else if(i == hour) {
    $(taskEl).addClass('present');
}
else { 
    $(taskEl).addClass('past');   
}}

}

scheduleTime();

$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("p");
    // Save text in local storage
    localStorage.setItem(time, text);
})



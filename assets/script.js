



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


//save to localStorage after clicking save button
$(".saveBtn").on("click", function () {
    
    var text = $(this).siblings(".description").val();
    var time = todayTime;
    
    localStorage.setItem(text, time);
    
  
})

// on page refresh, bring back saved text
$(window).on('load', function() {
    localStorage.getItem(key);
})




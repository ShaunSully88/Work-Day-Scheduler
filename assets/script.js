//Today's Date displayed on main page

var todayDate =moment().format('dddd, MMM Do YYYY');
$("#today").html(todayDate);
console.log(todayDate);
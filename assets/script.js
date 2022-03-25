//Today's Date displayed on main page
var todayDate =moment().format('dddd, MMM Do YYYY');
$("#today").html(todayDate);
console.log(todayDate);

//Today's time
var todayTime =moment().format('LT');
$("#time").html(todayTime);
console.log(todayTime);



//Timeblock time

for (var i = 9; i <= 17; i++); {
    
if(i > todayTime){
    $("").addClass('future');
}
else if(i == todayTime){
    $("textarea").addClass('present');
}
else{ 
    $("textarea").addClass('past');   
}};



//var saveTasks = function() {
  //  localStorage.setItem("tasks", JSON.stringify(tasks));
//  };
  
 // $(".list-group").on("click", "p", function() {
  //  var text = $(this)
  //  .text()
 //   .trim();
  //  console.log(text);
  
  //  var textInput = $("<textarea>")
   // .addClass("form-control")
  //  .val(text);
   // $(this).replaceWith(textInput);
  
   // textInput.trigger("focus");
    
 // });
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function(){
  var nowElement=document.getElementById("currentDay")
    var now = dayjs()
    nowElement.append(now)
})


  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.



$("#area9").text(localStorage.getItem("hour9"));
$("#area10").text(localStorage.getItem("hour10"));
$("#area11").text(localStorage.getItem("hour11"));
$("#area12").text(localStorage.getItem("hour12"));
$("#area13").text(localStorage.getItem("hour13"));
$("#area14").text(localStorage.getItem("hour14"));
$("#area15").text(localStorage.getItem("hour15"));
$("#area16").text(localStorage.getItem("hour16"));
$("#area17").text(localStorage.getItem("hour17"));


$("textarea").each(function() {
  var hourSlot = $(this).parent().attr("id");
  $(this).val(localStorage.getItem(hourSlot));
});

$(".saveBtn").on("click", function() {
  var text = $(this).siblings(".description").val();
  var hourSlot = $(this).parent().attr("id");

  localStorage.setItem(hourSlot, text);

  $(this).siblings("textarea").text(localStorage.getItem(hourSlot));
});



    
    


function  updateTense () {
  var hour =  dayjs().hour()
  var day= dayjs()
  $('.time-block').each(function () {
    var currentHour = parseInt($(this).attr("id").split("-")[1])

    if (currentHour === hour) {
      $(this).addClass('present');
    } else if (currentHour < hour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('future');
    }
  });
}
updateTense();


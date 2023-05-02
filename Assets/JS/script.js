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
  

  $(function(){
    var hour9= $("#hour-9")
    var hour10= $("#hour-10")
    var hour11= $("#hour-11")
    var hour12= $("#hour-12")
    var hour1= $("#hour-1")
    var hour2= $("#hour-2")
    var hour3= $("#hour-3")
    var hour4= $("#hour-4")
    var hour5= $("#hour-5")

    var hour= dayjs().hour()

    if (hour === 9) {
      hour9.removeClass("past future").addClass("present");
    } else if (hour < 9) {
      hour9.removeClass("present future").addClass("past");
    } else if(hour > 9){
      hour9.removeClass("present past").addClass("future");
    }

    if (hour === 10) {
      hour10.removeClass("past future").addClass("present");
    } else if (hour < 10) {
      hour10.removeClass("present future").addClass("past");
    } else if(hour > 10){
      hour10.removeClass("present past").addClass("future");
    }

    if (hour === 11) {
      hour11.removeClass("past future").addClass("present");
    } else if (hour < 11) {
      hour11.removeClass("present future").addClass("past");
    } else if(hour > 11){
      hour11.removeClass("present past").addClass("future");
    }

    if (hour === 12) {
      hour12.removeClass("past future").addClass("present");
    } else if (hour < 12) {
      hour12.removeClass("present future").addClass("past");
    } else if(hour > 12){
      hour12.removeClass("present past").addClass("future");
    }

    if (hour === 13) {
      hour1.removeClass("past future").addClass("present");
    } else if (hour < 13) {
      hour1.removeClass("present future").addClass("past");
    } else if(hour > 13){
      hour1.removeClass("present past").addClass("future");
    }

    if (hour === 14) {
      hour2.removeClass("past future").addClass("present");
    } else if (hour < 14) {
      hour2.removeClass("present future").addClass("past");
    } else if(hour > 14){
      hour2.removeClass("present past").addClass("future");
    }

    if (hour === 15) {
      hour3.removeClass("past future").addClass("present");
    } else if (hour < 15) {
      hour3.removeClass("present future").addClass("past");
    } else if(hour > 15){
      hour3.removeClass("present past").addClass("future");
    }

    if (hour === 16) {
      hour4.removeClass("past future").addClass("present");
    } else if (hour < 16) {
      hour4.removeClass("present future").addClass("past");
    } else if(hour > 16){
      hour4.removeClass("present past").addClass("future");
    }

    if (hour === 17) {
      hour5.removeClass("past future").addClass("present");
    } else if (hour < 17) {
      hour5.removeClass("present future").addClass("past");
    } else if(hour > 17){
      hour5.removeClass("present past").addClass("future");
    }
   
  
    
  
  });
  
  
  
  
  
  
 
//1) Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // 2) TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //



    
    // 3) TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // USE DIV ID's TO KEEP TRACK OF TIMES!!

    //var textArea = query select the text blocks

    //var timeActual = current HOUR

    //var timeCalendar= Use the id value of the time block
    //if (timeCalendar < timeActual){
      //textArea.removeClass('present')
      //textArea.addClass('past')
    //}else if (timeCalendar === timeActual) {
      //textArea.removeClass('future')
      //textArea.addClass('present')
    //}else if(timeCalendar > currentTime) {
      //textArea.addClass('future')
    //}

    // 4) TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    //assign localStorage to each individual time block by ID
    //var userEvents = []
    //userEvents = get.localstorage('userevent');
    //var calendarInput = document.queryselector('#calendar-event');
    //function updateCalendar (){
    //var userEvent = calendarInput.textContent;
      //userEvent = getItem.localStorage('userEvent');
    //}

    
    // 5) TODO: Add code to display the current date in the header of the page.
  });
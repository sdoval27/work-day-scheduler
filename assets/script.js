

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

    var saveBttn9 = $('#save-9');
    var saveBttn10 = $('#save-10');
    var saveBttn11 = $('#save-11');
    var saveBttn12 = $('#save-12');
    var saveBttn13 = $('#save-13');
    var saveBttn14 = $('#save-14');
    var saveBttn15 = $('#save-15');
    var saveBttn16 = $('#save-16');
    var saveBttn17 = $('#save-17');

    //event ('click', function() {
    //when button is clicked, local storage is retreived for content within the box.
    //}

    saveBttn9.on ('click', saveEvent);
    saveBttn10.on('click', saveEvent);
    saveBttn11.on('click', saveEvent);
    saveBttn12.on('click', saveEvent);
    saveBttn13.on('click', saveEvent);
    saveBttn14.on('click', saveEvent);
    saveBttn15.on('click', saveEvent);
    saveBttn16.on('click', saveEvent);
    saveBttn17.on('click', saveEvent);
    
    // 3) TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // USE DIV ID's TO KEEP TRACK OF TIMES!!

    //var textArea = document.queryselector('#calendar-event');

    //var timeActual = current HOUR as stated by calendar API

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
    
    var hour9El = [];
    hour9El = localStorage.getItem(hour9El);
   
    console.log(hour9El);

    //const bttn9 = $("#save-9");
    
    var hour10El = [];
    hour10El = localStorage.getItem(hour10El);

    
    
    var hour11El = [];
    hour11El = localStorage.getItem(hour11El);
   
    
    var hour12El = [];
    hour12El = localStorage.getItem(hour12El);
   

    var hour13El = [];
    hour13El = localStorage.getItem(hour13El);
    

    var hour14El = [];
    hour14El = localStorage.getItem(hour14El);
    

    var hour15El = [];
    hour15El = localStorage.getItem(hour15El);
    

    var hour16El = [];
    hour16El = localStorage.getItem(hour16El);
    

    var hour17El = [];
    hour17El = localStorage.getItem(hour17El);
    
    var hour9Save = document.querySelector('#hour-9');
    var hour10Save = document.querySelector('#hour-10');
    var hour11Save = document.querySelector('#hour-11');
    var hour12Save = document.querySelector('#hour-12');
    var hour13Save = document.querySelector('#hour-13');
    var hour14Save = document.querySelector('#hour-14');
    var hour15Save = document.querySelector('#hour-15');
    var hour16Save = document.querySelector('#hour-16');
    var hour17Save = document.querySelector('#hour-17');



    function saveEvent (){
      hour9El = hour9Save.value;
      hour10El = hour10Save.value;
      hour11El = hour11Save.value;
      hour12El = hour12Save.value;
      hour13El = hour13Save.value;
      hour14El = hour14Save.value;
      hour15El = hour15Save.value;
      hour16El = hour16Save.value;
      hour17El = hour17Save.value;

      
      hour10El = localStorage.getItem(hour10El);
      hour11El = localStorage.getItem(hour11El);
      hour12El = localStorage.getItem(hour12El);
      hour13El = localStorage.getItem(hour13El);
      hour14El = localStorage.getItem(hour14El);
      hour15El = localStorage.getItem(hour15El);
      hour16El = localStorage.getItem(hour16El);
      hour17El = localStorage.getItem(hour17El);

    }


    


    //userEvents = get.localstorage('userevent');
    //var calendarInput = document.queryselector('#calendar-event');
    //function updateCalendar (){
    //var userEvent = calendarInput.textContent;
      //userEvent = getItem.localStorage('userEvent');
    //}

    
    // 5) TODO: Add code to display the current date in the header of the page.
    //calendar date
   var date = dayjs().format('dddd, MMMM D, YYYY h:mm A');
   $('#currentDay').text(date);
  });

//1) Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {   
    //turns the current hour into an integer
    var currentHours = dayjs().format('H');
    var currentHour = parseInt(currentHours, 10);
    console.log(currentHour);

    // 'i' variable targets each hour of calendar
    for (i = 9; i <= 17; i++) {
    
      var calendarHour = $('#hour-'+ i );

      console.log(calendarHour);
      console.log(i);
      
      //controls color blocks as they correspond w time of day
      if (i < currentHour) {
      calendarHour.addClass('past');
      }else if (i === currentHour) {
      calendarHour.addClass('present');
      }else if (i > currentHour) {
      calendarHour.addClass('future');
      }

    }
    

    // 4) TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    //assign localStorage to each individual time block by ID
      
    

      $('.saveBtn').on('click', function(){
        //user calendar value
        var eventBox = $(this).siblings('textarea').val();
        //location of the user calendar value
        var eventKey = $(this).parent().attr('id');
        //save info to local storage
        localStorage.getItem(eventKey, eventBox);

        console.log(eventBox);
        console.log(eventKey);

        localStorage.setItem(eventKey, eventBox);
      })
      
      $('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour-9 textarea').val(localStorage.getItem('hour-9'));
$('#hour-10 textarea').val(localStorage.getItem('hour-10'));
$('#hour-11 textarea').val(localStorage.getItem('hour-11'));
$('#hour-12 textarea').val(localStorage.getItem('hour-12'));
$('#hour-13 textarea').val(localStorage.getItem('hour-13'));
$('#hour-14 textarea').val(localStorage.getItem('hour-14'));
$('#hour-15 textarea').val(localStorage.getItem('hour-15'));
$('#hour-16 textarea').val(localStorage.getItem('hour-16'));
$('#hour-17 textarea').val(localStorage.getItem('hour-17'));

    // Add code to display the current date in the header of the page.
    //calendar date
   var date = dayjs().format('dddd, MMMM D, YYYY h:mm A');
   $('#currentDay').text(date);

  });
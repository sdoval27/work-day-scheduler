
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
        var eventBox = $(this).siblings('textarea').val();
        var eventKey = $('#hour-').children('.description');

        console.log(eventBox);
        console.log(eventKey);

        localStorage.setItem(eventKey, eventBox);
      
      })

      localStorage.getItem(eventKey, eventBox);
    
    // Add code to display the current date in the header of the page.
    //calendar date
   var date = dayjs().format('dddd, MMMM D, YYYY h:mm A');
   $('#currentDay').text(date);

  });
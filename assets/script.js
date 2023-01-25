
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



    
      $('.saveBtn').on('click', function(){
      
      
      })


      

      hour9El = hour9Save.value;
      hour10El = hour10Save.value;
      hour11El = hour11Save.value;
      hour12El = hour12Save.value;
      hour13El = hour13Save.value;
      hour14El = hour14Save.value;
      hour15El = hour15Save.value;
      hour16El = hour16Save.value;
      hour17El = hour17Save.value;

      
      hour10El = localStorage.setItem(hour10El);
      hour11El = localStorage.setItem(hour11El);
      hour12El = localStorage.getItem(hour12El);
      hour13El = localStorage.getItem(hour13El);
      hour14El = localStorage.getItem(hour14El);
      hour15El = localStorage.getItem(hour15El);
      hour16El = localStorage.getItem(hour16El);
      hour17El = localStorage.getItem(hour17El);

    


    


    //userEvents = get.localstorage('userevent');
    //var calendarInput = document.queryselector('#calendar-event');
    //function updateCalendar (){
    //var userEvent = calendarInput.textContent;
      //userEvent = getItem.localStorage('userEvent');
    //}

    
    // Add code to display the current date in the header of the page.
    //calendar date
   var date = dayjs().format('dddd, MMMM D, YYYY h:mm A');
   $('#currentDay').text(date);

  });
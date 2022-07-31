function currentTime() {
    
    let date = new Date(); 
    let hours = date.getHours();/* this gets the current hour of the day */
    let mins = date.getMinutes(); /* this gets the current miniute */
    let seconds = date.getSeconds(); /* this gets the current seconds */
    hours = updateTime(hours);
    mins = updateTime(mins);
    seconds = updateTime(seconds); 
    document.getElementById("digital").innerText =  hours + " : " + mins+ " : " + seconds; /* this changes the text on the div to show the current time */
      var timer = setTimeout(function(){ currentTime() }, 1000); /* this keeps the timer going without refreshing the page */
  }
  
  function updateTime(k) { 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* this calls the currentTime() function */


  function currentDate() {

    let currentDate = new Date(); 
    let Day = currentDate.getDate(); /* this gets the current day of the month */
    let Month = currentDate.getMonth() + 1;  /* this gets the month of the year */
    let Year = currentDate.getFullYear(); /* this gets the current year */

    document.getElementById("date").innerText =  Day + "/" + Month + "/" + Year; /* this outputs the value of the current date in the div date */
  }

  currentDate();  /* this calls the currentDate() function */
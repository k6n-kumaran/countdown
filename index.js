let theDate = '2 Jun 2024';

let  days      = document.getElementById('days');
let  hours     = document.getElementById('hours');
let  minutes   = document.getElementById('minutes');
let  seconds   = document.getElementById('seconds');



function counter() {
   let newDate = new Date(theDate);
   let currentDate = new Date();


   // let days = Math.floor(((newDate-currentDate)/86400) / 1000);

   let totalNoOfSeconds = (newDate-currentDate) / 1000;
   let noOfDays         = Math.floor(totalNoOfSeconds/3600/24);
   let noOfHours        = Math.floor(totalNoOfSeconds/3600%24);
   let noOfMinutes      = (Math.floor(totalNoOfSeconds/60)%60);
   let noOfSeconds      = (Math.floor(totalNoOfSeconds%60));

   days.innerText   = timeFormat(noOfDays);
   hours.innerText  = timeFormat(noOfHours);
   minutes.innerText= timeFormat(noOfMinutes);
   seconds.innerText= timeFormat(noOfSeconds);
 
}
function timeFormat(time) {
     return time < 10 ? ("0"+time ): time ;
}


setInterval(counter,1000);




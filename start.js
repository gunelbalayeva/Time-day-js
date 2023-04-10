/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 23/11/2022 - 21:10:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/11/2022
    * - Author          : Administrator
    * - Modification    : 
**/

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
     
   if(hrs>=12 ){
      session.innerHTML = "PM";
   } else{
       session.innerHTML = "AM";
}
document.getElementById('hours').innerHTML = hrs;
document.getElementById('minutes').innerHTML = min;
document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime,10);




    
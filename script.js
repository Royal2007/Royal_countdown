/*NAME: EGOH ROYAL 
APP ID:154072  
COURSE:SOFTWARE ENGINEERING GRP B*/
var targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

setInterval(function(){
    var currentDate = new Date();
    var timeLeft = targetDate - currentDate;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days ;
    document.getElementById("hours").innerHTML = hours ;
    document.getElementById("minutes").innerHTML = minutes ;
    document.getElementById("seconds").innerHTML = seconds ;
    document.getElementById("end-date").innerHTML = targetDate;
});
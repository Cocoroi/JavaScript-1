var interval;
var started=false;
var time=0.00;
var clock=document.getElementById("clock");
var count = 0;

document.getElementById("start").addEventListener("click",function(){
    if(started==false){
        startTimer();
    }  else{
        stopTimer();
    }

});

document.getElementById("reset").addEventListener("click",function(){
    resetTimer();
});

document.getElementById("record").addEventListener("click",function(){
    recordTime();
});


function refreshClock(temps){
    clock.innerHTML=temps;
}

function startTimer(){
    interval=setInterval(function(){
        time=time+0.01;
        var tempss = parseFloat(time).toFixed( 2 );
        refreshClock(tempss);
    },10);
    started=true;

}

function stopTimer(){
    clearInterval(interval);
    started=false;
}

function resetTimer(){
    time=0.00;
    refreshClock(time);
    var temps=document.getElementById("clock");
    temps.innerHTML="00.00";
}

function recordTime(){
    count++;
    if (count >= 4) {
        document.getElementById('temps').removeChild(document.getElementById('temps').getElementsByTagName('p')[0]);
    }

    var timeSaved = parseFloat(time).toFixed(2);
    var temps = document.getElementById("temps");
    temps.innerHTML = temps.innerHTML + "<p>" + timeSaved + "</p>";
}

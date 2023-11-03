var hr = 0;
var min = 0;
var sec = 0;
var mil = 0;

var time = false;

function start() {
    time = true;
    stopwatch();
}
function pause() {
    time = false;
}
function reset() {
    time = false;
    hr = 0;
    min = 0;
    sec = 0;
    mil = 0;
    document.getElementById("hrs").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
    document.getElementById("mili").innerHTML = "00";
}
function stopwatch() {
    if (time == true) {
        mil = mil + 1;
        if (mil == 100) {
            mil = 0;
            sec = sec + 1;
            if (sec == 60) {
                sec = 0;
                min = min + 1;
            }
            if (min == 60) {
                min = 0;
                hr = hr + 1;
            }
        }

        var hrstring = hr;
        var minstring = min;
        var secstring = sec;
        var milstring = mil;

        if(hr<10){
            hrstring = "0"+hr;
        }
        if(min<10){
            minstring = "0"+min;
        }
        if(sec<10){
            secstring = "0"+sec;
        }
        if(mil<10){
            milstring = "0"+mil;
        }
        
        document.getElementById("secs").innerHTML = secstring;
        document.getElementById("mins").innerHTML = minstring;
        document.getElementById("hrs").innerHTML = hrstring;
        document.getElementById("mili").innerHTML = milstring;
        setTimeout("stopwatch()", 10);
    }
}
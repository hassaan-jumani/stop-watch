var minsec = 0;
var minutes = 0;
var sec = 0;

var idminutes = document.getElementById("minutes");
var idminsec = document.getElementById("minsec");
var idsec = document.getElementById("sec");
var interval;

function timer(){
    minsec ++;
    idminsec.innerHTML= minsec;
    if(minsec===100){
        sec ++ ;
        idsec.innerHTML = sec;
        minsec = 0
    }
    else if(sec===60){
        minutes ++;
        idsec.innerHTML = sec
        sec = 0
    }
}
function start(){
    interval  = setInterval(timer,10)
    var button = document.getElementById("disabled")
    button.disabled = true
}  
function reset(){
    minsec = 0;
    minutes = 0;
    sec =0;
    idsec.innerHTML = sec;
    idsec.innerHTML = sec;
    idminsec.innerHTML= minsec;
    stop();
    var button = document.getElementById("disabled")
    button.disabled = false
    

}
function stop(){
    clearInterval(interval)
    var button = document.getElementById("disabled")
    button.disabled = false
    
}

// //function newLap() {
//     if(started==true){
//         var laplbl = document.createElement("label");
//         laplbl.setAttribute("class","lap");
//         var laplbltxt = document.createTextNode("LAP"+newlap+" - "+m+":"+s+":"+ms/10);
//         laplbl.appendChild(laplbltxt);
        
//         // lap diveider
//         var lp = document.createElement("p");
//         lapssect.appendChild(lp);
//         lapssect.appendChild(laplbl);
//         newlap+=1;
//     }
// }

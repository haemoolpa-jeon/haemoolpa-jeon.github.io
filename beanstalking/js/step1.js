//Pop up Upon click of an object, it will open a box

//Watering Can pop-up

//Pop up box
var wcpopup = document.getElementById('wateringcan-on');

//Trigger element
var wctrigger = document.getElementById("trigger-wateringcan");

//Closing Button
var wcclose = document.getElementsByClassName("wateringcan-close")[0];


wctrigger.onclick = function () {
    wcpopup.style.display = "block";
}

wcclose.onclick = function () {
    wcpopup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == wcpopup) {
        wcpopup.style.display = "none";
    }
}


//Seed popup

var sdpopup = document.getElementById('seed-on');

var sdtrigger = document.getElementById("trigger-seed");

var sdclose = document.getElementsByClassName("seed-close")[0];


sdtrigger.onclick = function () {
    sdpopup.style.display = "block";
}

sdclose.onclick = function () {
    sdpopup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == sdpopup) {
        sdpopup.style.display = "none";
    }
}

//Step1 Tip1 popup

var s1t1popup = document.getElementById('s1t1-on');

var s1t1trigger = document.getElementById("trigger-s1t1");

var s1t1close = document.getElementsByClassName("s1t1-close")[0];


s1t1trigger.onclick = function () {
    s1t1popup.style.display = "block";
}

s1t1close.onclick = function () {
    s1t1popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == s1t1popup) {
        s1t1popup.style.display = "none";
    }
}

//Step1 Pot popup

var potpopup = document.getElementById('pot-on');

var pottrigger = document.getElementById("trigger-pot");

var potclose = document.getElementsByClassName("pot-close")[0];


pottrigger.onclick = function () {
    potpopup.style.display = "block";
}

potclose.onclick = function () {
    potpopup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == potpopup) {
        potpopup.style.display = "none";
    }
}

//music Player


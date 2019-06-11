//Pop up Upon click of an object, it will open a box

//Step2 Tip1 popup

var s2t1popup = document.getElementById('s2t1-on');

var s2t1trigger = document.getElementById("trigger-s2t1");

var s2t1close = document.getElementsByClassName("s2t1-close")[0];


s2t1trigger.onclick = function () {
    s2t1popup.style.display = "block";
}

s2t1close.onclick = function () {
    s2t1popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == s2t1popup) {
        s2t1popup.style.display = "none";
    }
}
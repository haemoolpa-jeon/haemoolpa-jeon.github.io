var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];
var donutOptions = {
  cutoutPercentage: 85,
  legend: {
    position: 'bottom',
    labels: {
      pointStyle: 'circle',
      usePointStyle: true
    }
  }
};
var chDonutData1 = {
  labels: ['Bootstrap', 'Popper', 'Other'],
  datasets: [
    {
      backgroundColor: colors.slice(0, 3),
      borderWidth: 0,
      data: [74, 11, 40]
    }
  ]
};
var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
    type: 'pie',
    data: chDonutData1,
    options: donutOptions
  });
}


/* ---------- JS for circular progress bar at Home ---------- */
var counter = document.getElementById('counter').getContext('2d');
var no = 0; // Starting Point
var pointToFill = 4.72;  //Point from where you want to fill the circle
var cw = counter.canvas.width;  //Return canvas width
var ch = counter.canvas.height; //Return canvas height
var diff;   // find the different between current value (no) and trageted value (100)

function fillCounter() {
  diff = ((no / 100) * Math.PI * 2 * 10);

  counter.clearRect(0, 0, cw, ch);   // Clear canvas every time when function is call

  counter.lineWidth = 77;     // size of stroke

  counter.fillStyle = '#f5cd79';     // color that you want to fill in counter/circle

  counter.strokeStyle = '#F5E0A9';    // Stroke Color

  counter.textAlign = 'center';

  counter.font = "300px monospace";    //set font size and face

  counter.fillText(no + '%', 520, 520);       //fillText(text,x,y);


  //Next line
  counter.fillStyle = 'white';
  counter.font = "100px monospace"; 
  counter.fillText("Current Status", 500, 650);       //fillText(text,x,y);

  counter.beginPath();
  counter.arc(500, 500, 450, pointToFill, diff / 10 + pointToFill);    //arc(x,y,radius,start,stop)

  counter.stroke();   // to fill stroke

  // now add condition

  if (no >= 60) {
    clearTimeout(fill);     //fill is a variable that call the function fillcounter()
  }
  no++;
}

//now call the function

var fill = setInterval(fillCounter, 50);     //call the fillCounter function after every 50MS
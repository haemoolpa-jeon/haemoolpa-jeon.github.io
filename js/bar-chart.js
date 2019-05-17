// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
      datasets: [
        {
          backgroundColor: ["#fff", "#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
          data: [11, 30, 10, 9, 13, 10, 12, 44]
        }
      ]
    },
    options: {
      legend: { display: false },
    }
});
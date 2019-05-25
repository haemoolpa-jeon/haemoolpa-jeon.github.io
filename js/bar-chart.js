// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          backgroundColor: ["#fff", "#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
          data: [62.6, 58.4, 72.5, 63, 0, 0, 0, 0]
        }
      ]
    },
    options: {
      legend: { display: false },
    }
});
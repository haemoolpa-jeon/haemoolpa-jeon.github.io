//Google pie chart js

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Type', 'Money Spent'],
        ['Food', 256.5],
        ['Entertainment', 208],
        ['Transport', 76],
        ['Rent', 155],
        ['Others', 53]
    ]);

    var options = {
        backgroundColor: "#e77f67",
        pieSliceText: "label",
        pieSliceTextStyle: { color: "white", fontSize: 30 },
        chartArea: { left: 25, top: 25, width: '95%', height: '95%' },
        height: '850px',
        width: '850px',
        legend: "none",
        fontSize: 50
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


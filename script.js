//google.charts.load("current", {packages:["corechart"]});
//google.charts.setOnLoadCallback(drawChart);
//function drawChart() {
 // var data = google.visualization.arrayToDataTable([
  //  ['Task', 'Hours per Day'],
   // ['Work',     11],
   // ['Eat',      2],
   // ['Commute',  2],
   // ['Watch TV', 2],
   // ['Sleep',    7]
  //]);

  //var options = {
   // title: 'My Wallet',
    //pieHole: 0.4,
  //};

 // var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  //chart.draw(data, options);
//}

function addMoney(){
let monthlyIncome = parseInt(document.getElementById("monthlyIncome").innerHTML);
 let currentIncome = parseInt(document.getElementById("currentIncome").innerHTML);
    let money = parseInt(document.getElementById('monthlyIncome').value);
    if (money == " " || isNaN(money)) {
        alert("Please enter a valid amount")
    }
}



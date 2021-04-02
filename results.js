/*---------------------------------------------------------budget chart-------------------------------------------------------*/
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
let data2 = JSON.parse(localStorage.getItem("Data") )


function drawChart() {
  const renderdata =[['Income', 'Data']];
  for (let i = 0; i < data2.length; i++) {
  renderdata.push([data2[i].name,data2[i].amount]);
}
var data = google.visualization.arrayToDataTable(renderdata);
  var options = {
    title: 'My Wallet',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}






/*-----------------------------------------------------------business articles--------------------------------------------------------------------*/
//define url 
let url = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=sFIGN6EPXkd7G8K5HuhGgeGi1JhZiinD";
//refernse HTML element by id 
let news = document.getElementById("news")
// It returns a promise that resolves with the result of parsing the response text as JSON then log data
//map through data to get article,titles and set attributes as a tags to present in DOM 
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.results.map(article => {
      console.log(article.title);

      let card = document.createElement("div")

      // a.textContent = article.title;
      card.setAttribute('class', 'tile is-parent')
      let section = document.createElement('article')
      section.setAttribute('class', 'tile is-child notification is-danger')
      let title = document.createElement('a')
      title.setAttribute('href', article.url);
      title.textContent = article.title;

      card.appendChild(section)
      section.appendChild(title)
      news.appendChild(card);

    })

  })




/*------------------------------------------------testing------------------------------------------------------*/


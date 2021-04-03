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
    title: 'Expense Stats',
    pieHole: 1.0,
  'width':950,
    'height':600,
   
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




/*------------------------------------------------giphy------------------------------------------------------*/

function giphySearch() {
  var userInput = document.getElementById("input").value
  console.log(userInput)
  
  var giphyApiKey = "btdF44P4FwFCWck8gLZv06dYHmUDigjy"
  var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`
  
  fetch(giphyApiURL).then(function(data) {
      return data.json()
  })
  .then(function(json){
    console.log(json.data[0].images.fixed_height.url)
    var imgPath = json.data[0].images.fixed_height.url
    var img = document.createElement("img")
    img.setAttribute("src", imgPath)
    document.body.appendChild(img)
  })
}

/*------------------------------------------------navbar------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
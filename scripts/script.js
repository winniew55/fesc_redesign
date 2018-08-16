//responsive nav bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//responsive google chart
function resize () {
   getProductionData();
   getConsumptionData();
  console.log("responsive test")
}
if (window.addEventListener) {
    window.addEventListener('resize', resize);
}
else {
    window.attachEvent('onresize', resize);
}

//draw APL google chart
function onDOMLoad(){
  google.charts.load('current', {'packages':['corechart','bar']});
  google.charts.setOnLoadCallback(getProductionData);
  google.charts.setOnLoadCallback(getConsumptionData);
}

document.addEventListener("DOMContentLoaded", onDOMLoad)

////draw APL google production chart
function getProductionData(){
  let request = new XMLHttpRequest()
  let requestUrl = "https://api.eia.gov/series/?api_key=e4c19ff1670c5d3cf5302fd525d3964c&series_id=SEDS.REPRB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function(){
    if(request.status !== 200){
      console.log("Something went wrong: ", request)
      return
    }
    let response= JSON.parse(request.response)
    console.log(response.series[0].data)
    drawProductionChart(response.series[0].data)
  }

  request.error = function(err){
    console.log("error is: ", err)
    return
  }
  request.send()
}

 function drawProductionChart(freshProductionData) {
   
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Renewable Energy Production');
        data.addRows(freshProductionData);
        
        var options = {'title':'Annual renewable energy production in Florida',
                       legend: { position: 'bottom' },
                        vAxis: {title: "Billion Btu"},
                       hAxis: {title: "Year"},
                       'colors': ['#f45341']
                      };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart-production'));
        chart.draw(data, options);
      }
////draw APL google consumption chart
function getConsumptionData(){
  
let request = new XMLHttpRequest()
  let requestUrl = "https://api.eia.gov/series/?api_key=e4c19ff1670c5d3cf5302fd525d3964c&series_id=SEDS.TETCB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function(){
    if(request.status !== 200){
      console.log("Something went wrong: ", request)
      return
    }
    let response= JSON.parse(request.response)
    console.log(response.series[0].data)
    drawConsumptionChart(response.series[0].data)
  }

  request.error = function(err){
    console.log("error is: ", err)
    return
  }
  request.send()
}
      
function drawConsumptionChart(freshConsumptionData) {
        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Electricity Consumption');
        data.addRows(freshConsumptionData)

        var options = {title:'Annual total electricity consumption in Florida',
                       legend: { position: 'bottom' },
                        vAxis: {title: "Billion Btu"},
                       hAxis: {title: "Year"},
                       colors: ['#4286f4']
                      };
  
var chart = new google.visualization.ColumnChart(document.getElementById('chart-consumption'));
        chart.draw(data, options);
}

//Vue.js for contact people

var ContactPerson = [
  {name: "Dr. David Norton",
    position: "Interim Director",
    email: "dpnorton@ufl.edu",
    imgSource: "image/norton.png"
  },{name: "Ms. Canan “Janan” Balaban",
    position: "Associate Director",
    email: "cbalaban@ufl.edu",
    imgSource: "image/balaban.png" 
  }
]

document.addEventListener("DOMContentLoaded", function(){
  let profilelistings = new Vue({
  el: '#profilelistings',
  data: {
    profiles:ContactPerson,
  }
})
  
  
})
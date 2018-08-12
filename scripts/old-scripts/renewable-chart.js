//DOMContentLoaded
//google chart library loaded
//get data from API
//data received from the API
//draw chart

function onDOMLoad(){
  //console.log("load google library")
  google.charts.load('current', {'packages':['corechart','bar']});
  google.charts.setOnLoadCallback(getData);
}

document.addEventListener("DOMContentLoaded", onDOMLoad)

function getData(){
  //console.log("Getting data is the third step! ")

  let request = new XMLHttpRequest()
  let requestUrl = "http://api.eia.gov/series/?api_key=e4c19ff1670c5d3cf5302fd525d3964c&series_id=SEDS.REPRB.FL.A"
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

 function drawProductionChart(freshData) {
        
   //let headerArray=["title", "other title"]
  // freshData.shift(headerArray)
   
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Renewable Energy Production');
        data.addRows(freshData);
        
        var options = {'title':'Annual renewable energy production in Florida',
                       legend: { position: 'bottom' },
                        vAxis: {title: "Billion Btu"},
                       hAxis: {title: "Year"},
                       'colors': ['#f45341']
                      };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart-production'));
        chart.draw(data, options);
      }

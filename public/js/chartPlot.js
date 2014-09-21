(function(window){

  var ChartPlot = {
    create:function(dataString){
      var dataParsed = JSON.parse(dataString);

      var dataConverted = {};
      var ithData;

      for (var i = 1; i < dataParsed.length; i++) {
        ithData = dataParsed[i];
        for (var j = 0; j < ithData.length; j++) {
          paramName = dataParsed[0][j].trim();
          if (dataConverted[paramName]) {
            dataConverted[paramName].push(dataParsed[i][j]);
          } else {
            dataConverted[paramName] = [dataParsed[i][j]];
          }
        }
      }

      console.log(dataConverted["Name"]);
      console.log(dataConverted["Age"]);


      var data = {
        labels: dataConverted["Name"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: dataConverted["Age"]
          }
        ]
      };

      var ctx = $("#myChart").get(0).getContext("2d");
      var options = {};

      var myBarChart = new Chart(ctx).Bar(data, options);
    }
  }

  window.ChartPlot = ChartPlot;
}(window))

(function(window){

  var ChartPlot = {
    create:function(dataString){
      var dataParsed = JSON.parse(dataString);

      var dataConverted = {};
      var ithData;

      var dropdown1 = document.getElementById("dropdown1");
      var dropdown2 = document.getElementById("dropdown2");
      var opt;

      for (var i = 1; i < dataParsed.length; i++) {
        ithData = dataParsed[i];
        for (var j = 0; j < ithData.length; j++) {
          paramName = dataParsed[0][j].trim();
          if (dataConverted[paramName]) {
            dataConverted[paramName].push(dataParsed[i][j]);
          } else {
            dataConverted[paramName] = [dataParsed[i][j]];
            opt = document.createElement("option");
            opt.text = paramName;
            opt.value = paramName;
            dropdown1.options.add(opt);
            dropdown2.options.add(opt);
          }
        }
      }
      dropdown1.style.display = 'block';
      dropdown2.style.display = 'block';
    },

    graphPlot:function(value1,value2){
      var data = {
        labels: value1,
        labels: dataConverted["Name"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: value2
            // data: dataConverted["Age"]
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

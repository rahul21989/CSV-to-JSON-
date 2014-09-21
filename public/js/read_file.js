
(function(window){

  var ReadFile = {
    isAPIAvailable : function() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        return true;
      } else {
        return false;
      }    
    },


    dataParse : function(file) {
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(event){
        var csv = event.target.result;
        var data = $.csv.toArrays(csv);
        var dataString = JSON.stringify(data);
        ChartPlot.create(dataString);
      };
      reader.onerror = function(){ 
        alert('Unable to read ' + file.fileName); 
      };
    }
  }

 window.ReadFile = ReadFile;
}(window))

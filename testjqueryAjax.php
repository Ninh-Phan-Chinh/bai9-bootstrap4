<?php header('Access-Control-Allow-Origin: *'); ?>


<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){

    $.ajax({

      url: 'http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=122333444455555abcdef&units=metric',
      // data: myData,
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data) { alert("Success"); },
      error: function() { alert('Failed!'); },
      // beforeSend: setHeader
    });
    // $.get("https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22", function(data, status){
    //   $dataTemp = data.main.temp
    //   $("#test").text($dataTemp)
    // });
  });



});
</script>
</head>
<body>

<button>Send an HTTP GET request to a page and get the result back</button>
<div id="test">

</div>

</body>
</html>

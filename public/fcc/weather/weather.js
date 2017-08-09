$(function() {
  var lat = 0;
  var lon = 0;
  var localisation = "";
  var celsius = 0;
  var farhenheit = 0;
  var weather = "";

  // Find longitude and latitude coordinates with Javascript function "geolocation.getCurrentPosition", doesnt work on codepen.io

  /*if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
       lat = position.coords.latitude;
       lon = position.coords.longitude;
       findCity(lat,lon);
    });
  } else {
     $(".city").html("Geolocation not supported");
  }*/

  // Find the ip adress thanks to ipinfo.io/json than get an array with all the data inside

  var findCity = function() {
    $.getJSON("http://ipinfo.io/json", function(result) {
      $.getJSON("http://api.openweathermap.org/data/2.5/weather", {
        q: result.city,
        appid: "061f24cf3cde2f60644a8240302983f2"
      }, function(json) {
        localisation = json;
        var degree = localisation.main.temp

        //T(°C) = T(K) - 273.15
        //T(°F) = T(K) × 9/5 - 459.67

        function kelvToCels() {
          celsius = (degree - 273.15).toFixed(2);
        }

        function kelvToFar() {
          farhenheit = (degree * 1.8 - 459.67).toFixed(2);
        }
        kelvToCels();
        kelvToFar();

        // Change Farhenheit or Celsius on click
        $(".farorcels").on("click", function(event) {
          if ($(".farorcels").html() === " °F") {
            $(".farorcels").html(" °C");
            $(".temp").html(celsius);
          } else if ($(".farorcels").html() === " °C") {
            $(".farorcels").html(" °F");
            $(".temp").html(farhenheit);
          }
        });

        // Load all the data from JSON

        $(".city").html(localisation.name + ", " + localisation.sys.country);
        if ($(".farorcels").html() === " °F") {
          $(".temp").html(farhenheit);
        } else {
          $(".temp").html(celsius);
        };
        weather = localisation.weather[0].description;
        console.log(weather);
        switch (weather) {
          case "mist":
            $("#weather").addClass("fa-cloud");
            break;
          case "clear sky":
            $("#weather").addClass("fa-sun-o");
            break;
          case "few clouds":
            $("#weather").addClass("fa-cloud");

            break;
          case "scattered clouds":
            $("#weather").addClass("fa-cloud");
            break;
          case "broken clouds":
            $("#weather").addClass("fa-cloud");
            break;
          case "overcast clouds":
            $("#weather").addClass("fa-cloud");
            break;
          case "light rain":
            $("#weather").addClass("rain");
            break;
          case "shower rain":
            $("#weather").addClass("rain");
            break;
          case "rain":
            $("#weather").addClass("rain");
            break;
          case "moderate rain":
            $("#weather").addClass("rain");
            break;
          case "thunderstorm":
            $("#weather").addClass("thunder");
            break;
          case "snow":
            $("#weather").addClass("snow");
            break;
          default:
            $("#weather").html(weather);
        }
        //$("#weather").html(weather);
      });
    });
    // $(this).attr("class","newclass");

  }
  findCity();

});

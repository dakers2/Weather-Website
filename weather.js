$(document).ready(function(){
	$('form').submit(function() {

		var location = $('#location').eq(0).val();

		var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + location + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

		$.getJSON(url, function(w) { 
		    //empty to stop it from adding more tables
		    $("#weather-container").empty();
			
			var codeLibrary = {
			    0: "icons/tornado.png",
			    1: "icons/ storm",
			    2: "icons/hurricane",
			    3: "icons/thunder.png",
			    4: "icons/thunder.png",
			    5: "icons/snow.png",
			    6: "icons/rain-1.png",
			    7: "icons/rain-1.png",
			    8: "icons/rain-1.png",
			    9: "icons/rain-2.png",
			    10: "icons/rain-1.png",
			    11: "icons/rain.png",
			    12: "icons/rain.png",
			    13: "icons/snowflake.png",
			    14: "icons/snowflake.png",
			    15: "icons/snow.png",
			    16: "icons/snow.png",
			    17: "icons/snow.png",
			    18: "icons/snow.png",
			    19: "icons/wind.png",
			    20: "icons/fog.png",
			    21: "icons/fog-1.png",
			    22: "icons/fog-1.png",
			    23: "icons/wind.png",
			    24: "icons/wind.png",
			    25: "icons/thermometer.png",
			    26: "icons/cloudy.png",
			    27: "icons/cloudy-2.png",
			    28: "icons/cloudy.png",
			    29: "icons/cloudy-2.png",
			    30: "icons/cloudy.png",
			    31: "icons/sun.png",
			    32: "icons/sun.png",
			    33: "icons/moon-and-stars.png",
			    34: "icons/cloudy.png",
			    35: "icons/rain-1.png",
			    36: "icons/thermometer.png",
			    37: "icons/thunder.png",
			    38: "icons/thunder.png",
			    39: "icons/thunder.png",
			    40: "icons/rain-2.png",
			    41: "icons/snow.png",
			    42: "icons/snow.png",
			    43: "icons/snow.png",
			    44: "icons/cloudy.png",
			    45: "icons/thunder.png",
			    46: "icons/snow.png",
			    47: "icons/thunder.png",
			    3200: "icons/rainbow.png"
			};

			var path = w.query.results.channel.item.forecast;

			$(path).each (function(index, value){
				//gets top level weather div
				var container = $("#weather-container");
				
				//adds child element (box div) to weather div
				container.append("<div class='weather-box'></div>");
				
				//gets last box so it can add the weather data to it
				var box = container.children().last();
				
				box.append("<div class='day'>" + value.day + "</div>");
				box.append("<div class='date'>" + value.date + "</div>");
				box.append("<div class='temp'>" + value.high + "&#8457;</div>");

				var codeIcon = codeLibrary[value.code];
				box.append("<div class='icon'><img src='" + codeIcon + "' /></div>");

				box.append("<div class='cond'>" + value.text + "</div>");
			});	
		});

		return false;
	});
	
});


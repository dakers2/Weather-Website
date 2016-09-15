$(document).ready(function(){
	$('form').submit(function() {

		var location = $('#location').eq(0).val();

		var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + location + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

		$.getJSON(url, function(w) { 
			//empty to stop it from adding more tables
			$("#date").empty();
			$("#day").empty();
			$("#temp").empty();
			$("#cond").empty();
				
				
			var path = w.query.results.channel.item.forecast;
		
			$(path).each (function(index, value){
				$("#date").append("<div>" + value.date + "</div>"); 
				$("#day").append("<div>" + value.day + "</div>");
				$("#temp").append("<div>" + value.high + "/" + value.low + "</div>");
				$("#cond").append("<div>" + value.text + "</div>"); 
			});	
		});
			return false;
	});
	
});

/*
		w.query.results.channel.item.forecast.forEach (function(index){
			$("#date").append("<td>" + index.date + "</td>"); 
		});
		w.query.results.channel.item.forecast.forEach (function(index){
			$("#day").append("<td>" + index.day + "</td>");
		});
		w.query.results.channel.item.forecast.forEach (function(index){
			$("#temp").append("<td>" + index.high + "/" + index.low + "</td>");
		});
		w.query.results.channel.item.forecast.forEach (function(index){
			$("#cond").append("<td>" + index.text + "</td>"); 
		});
		
		
		
		var path = w.query.results.channel.item.forecast;
		
		$(path).each (function(index){
			$("#date").append("<td>" + index.date + "</td>"); 
			$("#day").append("<td>" + index.day + "</td>");
			$("#temp").append("<td>" + index.high + "/" + index.low + "</td>");
			$("#cond").append("<td>" + index.text + "</td>"); 
		});
*/

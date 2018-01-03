require = require('request');
require('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(err, res, body){
	if(err) {
		console.log("There was an error");
		console.log("Error");
	} else {
		if (res.statusCode == 200) {
			console.log(body);
		}
	}
});

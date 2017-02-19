/*var getIP = 'http://ip-api.com/json/';

var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
$.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units: 'metric',
        APPID: 'a2a1a0bf093b17fbd09d5ebf52f0ee10'
    }).done(function(weather) {
    	console.log(weather);
       $('#weather').html('<h1>'+ weather.name+weather.wind.speed+'</h1>');
    })
});*/
	
// Init
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON(openWeatherMap,{
        	lat:position.coords.latitude,
        	lon:position.coords.longitude,
        	units:'metric',
        	APPID :'a2a1a0bf093b17fbd09d5ebf52f0ee10'
        }).done(function(weather){
        	console.log(weather.weather[0].description);
        	$('#weather').html(weather.name +' '+ weather.main.temp_max+'&#8451;');
        	$('#desc').html( weather.weather[0].description)

        });
    });
}
export default function fetchForecast(){
    fetch('http://api.weatherapi.com/v1/forecast.json?key=42830ef394df4aba9fc235453242906&q=' + search.value + '&days=3&aqi=no')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
}


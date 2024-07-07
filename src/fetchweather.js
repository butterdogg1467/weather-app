export default function fetchWeather(){
    fetch('http://api.weatherapi.com/v1/current.json?key=42830ef394df4aba9fc235453242906&q=' + search.value + '&aqi=no`')
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

export let search = document.querySelector('#search')
export let city = search.value


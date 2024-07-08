export default function fetchWeather(){
    fetch('http://api.weatherapi.com/v1/current.json?key=42830ef394df4aba9fc235453242906&q=' + search.value + '&aqi=no`')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        name.textContent = data.location.name + ', ' + data.location.region + ', ' + data.location.country
        time.textContent = 'Time: ' + data.location.localtime
        condition.textContent = 'Condition: ' + data.current.condition.text
        conditionIcon.src = data.current.condition.icon
        temp.textContent = 'Temperature: ' + data.current.temp_c
        feelsLike.textContent = 'Feels Like: ' + data.current.feelslike_c
        wind.textContent = 'Wind: ' + data.current.wind_mph
        gust.textContent = 'Gust: ' + data.current.gust_mph
    })
    .catch(function(err){
        console.log(err)
    })
}

export let search = document.querySelector('#search')
export let city = search.value


let name = document.querySelector('.cityname')
let time = document.querySelector('.time')
const condition = document.querySelector('.condition')
const conditionIcon = document.querySelector('.conditionicon')
const temp = document.querySelector('.temp')
const feelsLike = document.querySelector('.feelslike')
const wind = document.querySelector('.wind')
const gust = document.querySelector('.gust')


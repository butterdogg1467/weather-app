import formatDate from "./formatedate";
import cutTime from "./cuttime";

export default function fetchWeather(){
    fetch('http://api.weatherapi.com/v1/current.json?key=42830ef394df4aba9fc235453242906&q=' + search.value + '&days=3&aqi=no')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        name.textContent = data.location.name + ', ' + data.location.region + ', ' + data.location.country
        date.textContent = 'Date: ' + formatDate(data.location.localtime)
        time.textContent = 'Time: ' + cutTime(data.location.localtime)
        condition.textContent = 'Condition: ' + data.current.condition.text
        conditionIcon.src = data.current.condition.icon
        temp.textContent = 'Temperature: ' + data.current.temp_c
        feelsLike.textContent = 'Feels Like: ' + data.current.feelslike_c
        wind.textContent = 'Wind: ' + data.current.wind_mph
        gust.textContent = 'Gust: ' + data.current.gust_mph
        currentGroup.style.backgroundColor = '#5A9DB5'
        currentGroup.style.border = 'solid black 2px'
        currentGroup.style.borderRadius = '15px'
    })
    .catch(function(err){
        console.log(err)
    })
}

export let search = document.querySelector('#search')
export let city = search.value


let name = document.querySelector('.cityname')
let date = document.querySelector('.date')
let time = document.querySelector('.time')
const condition = document.querySelector('.condition')
const conditionIcon = document.querySelector('.conditionicon')
const temp = document.querySelector('.temp')
const feelsLike = document.querySelector('.feelslike')
const wind = document.querySelector('.wind')
const gust = document.querySelector('.gust')


let currentGroup = document.querySelector('.currentgroup')


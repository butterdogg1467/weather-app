import formatDate from "./formatedate";
import cutTime from "./cuttime";

let unitSwitchBtn = document.querySelector('#ftoc')

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
let f= document.querySelector('#f')
let c = document.querySelector('#c')

export default function fetchWeather(){
    fetch('https://api.weatherapi.com/v1/current.json?key=322ddc56463843cfbf520430241307&q=' + search.value + '&days=3&aqi=no')
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
        currentGroup.style.backgroundColor = 'white'
        currentGroup.style.border = 'solid black 1px'
        temp.textContent = 'Temperature: ' + data.current.temp_c + '°C' 
        feelsLike.textContent = 'Feels Like: ' + data.current.feelslike_c + '°C'
        wind.textContent = 'Wind: ' + data.current.wind_mph + ' k/ph'
        gust.textContent = 'Gust: ' + data.current.gust_mph + ' k/ph'
            f.addEventListener('click', () => {
                temp.textContent = 'Temperature: ' + data.current.temp_f + '°F' 
                feelsLike.textContent = 'Feels Like: ' + data.current.feelslike_f + '°F'
                wind.textContent = 'Wind: ' + data.current.wind_kph + ' m/ph'
                gust.textContent = 'Gust: ' + data.current.gust_kph + ' m/ph'
            })
            
            c.addEventListener('click', () => {
                temp.textContent = 'Temperature: ' + data.current.temp_c + '°C' 
                feelsLike.textContent = 'Feels Like: ' + data.current.feelslike_c + '°C'
                wind.textContent = 'Wind: ' + data.current.wind_mph + ' k/ph'
                gust.textContent = 'Gust: ' + data.current.gust_mph + ' k/ph'
            })
                
            
        
    })
    .catch(function(err){
        console.log(err)
    })
}

export let search = document.querySelector('#search')
export let city = search.value


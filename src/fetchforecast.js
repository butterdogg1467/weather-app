import formatDate from "./formatedate";

const date1 = document.querySelector('#date1');
const avgtemp1 = document.querySelector('#avgtemp1');
const forecasticon1 = document.querySelector('#forecasticon1');

const date2 = document.querySelector('#date2');
const avgtemp2 = document.querySelector('#avgtemp2');
const forecasticon2 = document.querySelector('#forecasticon2');

const date3 = document.querySelector('#date3');
const avgtemp3 = document.querySelector('#avgtemp3');
const forecasticon3 = document.querySelector('#forecasticon3');

let forecastGroup1 = document.querySelector('.forecastgroup1')
let forecastGroup2 = document.querySelector('.forecastgroup2')
let forecastGroup3 = document.querySelector('.forecastgroup3')

let f= document.querySelector('#f')
let c = document.querySelector('#c')

let forecastGroups = document.querySelector('.forecastgroups')

export default function fetchForecast(){
    fetch('https://api.weatherapi.com/v1/forecast.json?key=322ddc56463843cfbf520430241307&q=' + search.value + '&days=3&aqi=no')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)

        document.body.style.backgroundColor = '#87CEEB'

        date1.textContent = formatDate(data.forecast.forecastday[0].date)
        avgtemp1.textContent = data.forecast.forecastday[0].day.avgtemp_c + '°C'
        forecasticon1.src = data.forecast.forecastday[0].day.condition.icon
        forecastGroup1.style.border = 'solid black 1px'
        forecastGroup1.style.backgroundColor = 'white'
        
        date2.textContent = formatDate(data.forecast.forecastday[1].date)
        avgtemp2.textContent = data.forecast.forecastday[1].day.avgtemp_c + '°C'
        forecasticon2.src = data.forecast.forecastday[1].day.condition.icon
        forecastGroup2.style.border = 'solid black 1px'
        forecastGroup2.style.backgroundColor = 'white'
        
        date3.textContent = formatDate(data.forecast.forecastday[2].date)
        avgtemp3.textContent = data.forecast.forecastday[2].day.avgtemp_c + '°C'
        forecasticon3.src = data.forecast.forecastday[2].day.condition.icon
        forecastGroup3.style.border = 'solid black 1px'
        forecastGroup3.style.backgroundColor = 'white'
        
        f.addEventListener('click', () => {        
            avgtemp1.textContent = data.forecast.forecastday[0].day.avgtemp_f + '°F'
            avgtemp2.textContent = data.forecast.forecastday[1].day.avgtemp_f + '°F'
            avgtemp3.textContent = data.forecast.forecastday[2].day.avgtemp_f + '°F'
    
        })
        
        c.addEventListener('click', () => {
            avgtemp1.textContent = data.forecast.forecastday[0].day.avgtemp_c + '°C'
            avgtemp2.textContent = data.forecast.forecastday[1].day.avgtemp_c + '°C'
            avgtemp3.textContent = data.forecast.forecastday[2].day.avgtemp_c + '°C'
        })

    })
    .catch(function(err){
        console.log(err)
    })
}


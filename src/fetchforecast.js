import formatDate from "./formatedate";

export default function fetchForecast(){
    fetch('http://api.weatherapi.com/v1/forecast.json?key=42830ef394df4aba9fc235453242906&q=' + search.value + '&days=3&aqi=no')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        date1.textContent = formatDate(data.forecast.forecastday[0].date)
        avgtemp1.textContent = data.forecast.forecastday[0].day.avgtemp_c
        forecasticon1.src = data.forecast.forecastday[0].day.condition.icon

        
        date2.textContent = formatDate(data.forecast.forecastday[1].date)
        avgtemp2.textContent = data.forecast.forecastday[1].day.avgtemp_c
        forecasticon2.src = data.forecast.forecastday[1].day.condition.icon

        
        date3.textContent = formatDate(data.forecast.forecastday[2].date)
        avgtemp3.textContent = data.forecast.forecastday[2].day.avgtemp_c
        forecasticon3.src = data.forecast.forecastday[2].day.condition.icon
    })
    .catch(function(err){
        console.log(err)
    })
}

const date1 = document.querySelector('#date1');
const avgtemp1 = document.querySelector('#avgtemp1');
const forecasticon1 = document.querySelector('#forecasticon1');

const date2 = document.querySelector('#date2');
const avgtemp2 = document.querySelector('#avgtemp2');
const forecasticon2 = document.querySelector('#forecasticon2');

const date3 = document.querySelector('#date3');
const avgtemp3 = document.querySelector('#avgtemp3');
const forecasticon3 = document.querySelector('#forecasticon3');


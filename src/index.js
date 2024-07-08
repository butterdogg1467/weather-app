import fetchApi from "./fetchapi"
import fetchWeather from "./fetchweather"
import fetchForecast from "./fetchforecast"

document.addEventListener('DOMContentLoaded', () => {

    let searchBtn = document.querySelector('#searchbutton')

    fetchApi()

searchBtn.addEventListener('click', function(){
    fetchWeather()
    fetchForecast()
})


























































})
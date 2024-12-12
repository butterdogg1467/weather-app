import fetchApi from "./fetchapi"
import fetchWeather from "./fetchweather"
import fetchForecast from "./fetchforecast"
import fetchHourly from "./fetchhourly"
import './styles.css'

document.addEventListener('DOMContentLoaded', () => {

    let searchBtn = document.querySelector('#searchbutton')

    fetchApi()

searchBtn.addEventListener('click', function(){
    fetchWeather()
    fetchForecast()
    fetchHourly()
})



























































})
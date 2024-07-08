import fetchApi from "./fetchapi"
import fetchWeather from "./fetchweather"

document.addEventListener('DOMContentLoaded', () => {

    let searchBtn = document.querySelector('#searchbutton')

    fetchApi()

searchBtn.addEventListener('click', function(){
    fetchWeather()
})





























































})
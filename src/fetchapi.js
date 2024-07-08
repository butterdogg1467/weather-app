
    export default function fetchApi() {
        fetch('http://api.weatherapi.com/v1/current.json?key=42830ef394df4aba9fc235453242906&q=Toronto&aqi=no')
        .then(function(response){
            let jsonResponse = response.json()
            console.log('Success!')
        })
        .catch(function(err){
            let jsonErr = err.json()
            console.log('Error!' + ":" + jsonErr)
        })

    }

export let search = document.querySelector('#search')
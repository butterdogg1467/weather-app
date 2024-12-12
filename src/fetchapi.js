
    export default function fetchApi() {
        fetch('http://api.weatherapi.com/v1/current.json?key=322ddc56463843cfbf520430241307&days=3&q=Toronto&aqi=no')
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
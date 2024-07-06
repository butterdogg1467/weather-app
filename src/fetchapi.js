
    export default function fetchApi() {
        fetch('http://api.weatherapi.com/v1/current.json?key=42830ef394df4aba9fc235453242906&q=London&aqi=no')
        .then(function(response){
            let jsonResponse = response.json()
            console.log('Success!' + ":" + jsonResponse)
        })
        .catch(function(err){
            let jsonErr = err.json()
            console.log('Error!' + ":" + jsonErr)
        })

    }

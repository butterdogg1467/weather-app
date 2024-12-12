import cutTime from "./cuttime";

let f= document.querySelector('#f')
let c = document.querySelector('#c')
let hourlyforecastcontainer = document.querySelector('.hourlyforecast')

let hour0 = document.querySelector('#hour0');
let hour0icon = document.querySelector('#hour0icon');
let hour0date = document.querySelector('#hour0date');
let hour0temp = document.querySelector('#hour0temp');

let hour1 = document.querySelector('#hour1');
let hour1icon = document.querySelector('#hour1icon');
let hour1date = document.querySelector('#hour1date');
let hour1temp = document.querySelector('#hour1temp');

let hour2 = document.querySelector('#hour2');
let hour2icon = document.querySelector('#hour2icon');
let hour2date = document.querySelector('#hour2date');
let hour2temp = document.querySelector('#hour2temp');

let hour3 = document.querySelector('#hour3');
let hour3icon = document.querySelector('#hour3icon');
let hour3date = document.querySelector('#hour3date');
let hour3temp = document.querySelector('#hour3temp');

let hour4 = document.querySelector('#hour4');
let hour4icon = document.querySelector('#hour4icon');
let hour4date = document.querySelector('#hour4date');
let hour4temp = document.querySelector('#hour4temp');

let hour5 = document.querySelector('#hour5');
let hour5icon = document.querySelector('#hour5icon');
let hour5date = document.querySelector('#hour5date');
let hour5temp = document.querySelector('#hour5temp');

let hour6 = document.querySelector('#hour6');
let hour6icon = document.querySelector('#hour6icon');
let hour6date = document.querySelector('#hour6date');
let hour6temp = document.querySelector('#hour6temp');

let hour7 = document.querySelector('#hour7');
let hour7icon = document.querySelector('#hour7icon');
let hour7date = document.querySelector('#hour7date');
let hour7temp = document.querySelector('#hour7temp');

let hour8 = document.querySelector('#hour8');
let hour8icon = document.querySelector('#hour8icon');
let hour8date = document.querySelector('#hour8date');
let hour8temp = document.querySelector('#hour8temp');

let hour9 = document.querySelector('#hour9');
let hour9icon = document.querySelector('#hour9icon');
let hour9date = document.querySelector('#hour9date');
let hour9temp = document.querySelector('#hour9temp');

let hour10 = document.querySelector('#hour10');
let hour10icon = document.querySelector('#hour10icon');
let hour10date = document.querySelector('#hour10date');
let hour10temp = document.querySelector('#hour10temp');

let hour11 = document.querySelector('#hour11');
let hour11icon = document.querySelector('#hour11icon');
let hour11date = document.querySelector('#hour11date');
let hour11temp = document.querySelector('#hour11temp');

let hour12 = document.querySelector('#hour12');
let hour12icon = document.querySelector('#hour12icon');
let hour12date = document.querySelector('#hour12date');
let hour12temp = document.querySelector('#hour12temp');

let hour13 = document.querySelector('#hour13');
let hour13icon = document.querySelector('#hour13icon');
let hour13date = document.querySelector('#hour13date');
let hour13temp = document.querySelector('#hour13temp');

let hour14 = document.querySelector('#hour14');
let hour14icon = document.querySelector('#hour14icon');
let hour14date = document.querySelector('#hour14date');
let hour14temp = document.querySelector('#hour14temp');

let hour15 = document.querySelector('#hour15');
let hour15icon = document.querySelector('#hour15icon');
let hour15date = document.querySelector('#hour15date');
let hour15temp = document.querySelector('#hour15temp');

let hour16 = document.querySelector('#hour16');
let hour16icon = document.querySelector('#hour16icon');
let hour16date = document.querySelector('#hour16date');
let hour16temp = document.querySelector('#hour16temp');

let hour17 = document.querySelector('#hour17');
let hour17icon = document.querySelector('#hour17icon');
let hour17date = document.querySelector('#hour17date');
let hour17temp = document.querySelector('#hour17temp');

let hour18 = document.querySelector('#hour18');
let hour18icon = document.querySelector('#hour18icon');
let hour18date = document.querySelector('#hour18date');
let hour18temp = document.querySelector('#hour18temp');

let hour19 = document.querySelector('#hour19');
let hour19icon = document.querySelector('#hour19icon');
let hour19date = document.querySelector('#hour19date');
let hour19temp = document.querySelector('#hour19temp');

let hour20 = document.querySelector('#hour20');
let hour20icon = document.querySelector('#hour20icon');
let hour20date = document.querySelector('#hour20date');
let hour20temp = document.querySelector('#hour20temp');

let hour21 = document.querySelector('#hour21');
let hour21icon = document.querySelector('#hour21icon');
let hour21date = document.querySelector('#hour21date');
let hour21temp = document.querySelector('#hour21temp');

let hour22 = document.querySelector('#hour22');
let hour22icon = document.querySelector('#hour22icon');
let hour22date = document.querySelector('#hour22date');
let hour22temp = document.querySelector('#hour22temp');

let hour23 = document.querySelector('#hour23');
let hour23icon = document.querySelector('#hour23icon');
let hour23date = document.querySelector('#hour23date');
let hour23temp = document.querySelector('#hour23temp');

export default function fetchHourly(){
    fetch('https://api.weatherapi.com/v1/forecast.json?key=322ddc56463843cfbf520430241307&q=' + search.value + '&aqi=no')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)

    hourlyforecastcontainer.style.border = 'solid black 0.5px'

    hour0icon.src = data.forecast.forecastday[0].hour[0].condition.icon;
    hour0date.textContent = cutTime(data.forecast.forecastday[0].hour[0].time);
    hour0temp.textContent = data.forecast.forecastday[0].hour[0].temp_c + '°C';

    hour1icon.src = data.forecast.forecastday[0].hour[1].condition.icon;
    hour1date.textContent = cutTime(data.forecast.forecastday[0].hour[1].time);
    hour1temp.textContent = data.forecast.forecastday[0].hour[1].temp_c + '°C';

    hour2icon.src = data.forecast.forecastday[0].hour[2].condition.icon;
    hour2date.textContent = cutTime(data.forecast.forecastday[0].hour[2].time);
    hour2temp.textContent = data.forecast.forecastday[0].hour[2].temp_c + '°C';

    hour3icon.src = data.forecast.forecastday[0].hour[3].condition.icon;
    hour3date.textContent = cutTime(data.forecast.forecastday[0].hour[3].time);
    hour3temp.textContent = data.forecast.forecastday[0].hour[3].temp_c + '°C';

    hour4icon.src = data.forecast.forecastday[0].hour[4].condition.icon;
    hour4date.textContent = cutTime(data.forecast.forecastday[0].hour[4].time);
    hour4temp.textContent = data.forecast.forecastday[0].hour[4].temp_c + '°C';

    hour5icon.src = data.forecast.forecastday[0].hour[5].condition.icon;
    hour5date.textContent = cutTime(data.forecast.forecastday[0].hour[5].time);
    hour5temp.textContent = data.forecast.forecastday[0].hour[5].temp_c + '°C';

    hour6icon.src = data.forecast.forecastday[0].hour[6].condition.icon;
    hour6date.textContent = cutTime(data.forecast.forecastday[0].hour[6].time);
    hour6temp.textContent = data.forecast.forecastday[0].hour[6].temp_c + '°C';

    hour7icon.src = data.forecast.forecastday[0].hour[7].condition.icon;
    hour7date.textContent = cutTime(data.forecast.forecastday[0].hour[7].time);
    hour7temp.textContent = data.forecast.forecastday[0].hour[7].temp_c + '°C';

    hour8icon.src = data.forecast.forecastday[0].hour[8].condition.icon;
    hour8date.textContent = cutTime(data.forecast.forecastday[0].hour[8].time);
    hour8temp.textContent = data.forecast.forecastday[0].hour[8].temp_c + '°C';

    hour9icon.src = data.forecast.forecastday[0].hour[9].condition.icon;
    hour9date.textContent = cutTime(data.forecast.forecastday[0].hour[9].time);
    hour9temp.textContent = data.forecast.forecastday[0].hour[9].temp_c + '°C';

    hour10icon.src = data.forecast.forecastday[0].hour[10].condition.icon;
    hour10date.textContent = cutTime(data.forecast.forecastday[0].hour[10].time);
    hour10temp.textContent = data.forecast.forecastday[0].hour[10].temp_c + '°C';

    hour11icon.src = data.forecast.forecastday[0].hour[11].condition.icon;
    hour11date.textContent = cutTime(data.forecast.forecastday[0].hour[11].time);
    hour11temp.textContent = data.forecast.forecastday[0].hour[11].temp_c + '°C';

    hour12icon.src = data.forecast.forecastday[0].hour[12].condition.icon;
    hour12date.textContent = cutTime(data.forecast.forecastday[0].hour[12].time);
    hour12temp.textContent = data.forecast.forecastday[0].hour[12].temp_c + '°C';

    hour13icon.src = data.forecast.forecastday[0].hour[13].condition.icon;
    hour13date.textContent = cutTime(data.forecast.forecastday[0].hour[13].time);
    hour13temp.textContent = data.forecast.forecastday[0].hour[13].temp_c + '°C';

    hour14icon.src = data.forecast.forecastday[0].hour[14].condition.icon;
    hour14date.textContent = cutTime(data.forecast.forecastday[0].hour[14].time);
    hour14temp.textContent = data.forecast.forecastday[0].hour[14].temp_c + '°C';

    hour15icon.src = data.forecast.forecastday[0].hour[15].condition.icon;
    hour15date.textContent = cutTime(data.forecast.forecastday[0].hour[15].time);
    hour15temp.textContent = data.forecast.forecastday[0].hour[15].temp_c + '°C';

    hour16icon.src = data.forecast.forecastday[0].hour[16].condition.icon;
    hour16date.textContent = cutTime(data.forecast.forecastday[0].hour[16].time);
    hour16temp.textContent = data.forecast.forecastday[0].hour[16].temp_c + '°C';

    hour17icon.src = data.forecast.forecastday[0].hour[17].condition.icon;
    hour17date.textContent = cutTime(data.forecast.forecastday[0].hour[17].time);
    hour17temp.textContent = data.forecast.forecastday[0].hour[17].temp_c + '°C';

    hour18icon.src = data.forecast.forecastday[0].hour[18].condition.icon;
    hour18date.textContent = cutTime(data.forecast.forecastday[0].hour[18].time);
    hour18temp.textContent = data.forecast.forecastday[0].hour[18].temp_c + '°C';

    hour19icon.src = data.forecast.forecastday[0].hour[19].condition.icon;
    hour19date.textContent = cutTime(data.forecast.forecastday[0].hour[19].time);
    hour19temp.textContent = data.forecast.forecastday[0].hour[19].temp_c + '°C';

    hour20icon.src = data.forecast.forecastday[0].hour[20].condition.icon;
    hour20date.textContent = cutTime(data.forecast.forecastday[0].hour[20].time);
    hour20temp.textContent = data.forecast.forecastday[0].hour[20].temp_c + '°C';

    hour21icon.src = data.forecast.forecastday[0].hour[21].condition.icon;
    hour21date.textContent = cutTime(data.forecast.forecastday[0].hour[21].time);
    hour21temp.textContent = data.forecast.forecastday[0].hour[21].temp_c + '°C';

    hour22icon.src = data.forecast.forecastday[0].hour[22].condition.icon;
    hour22date.textContent = cutTime(data.forecast.forecastday[0].hour[22].time);
    hour22temp.textContent = data.forecast.forecastday[0].hour[22].temp_c + '°C';

    hour23icon.src = data.forecast.forecastday[0].hour[23].condition.icon;
    hour23date.textContent = cutTime(data.forecast.forecastday[0].hour[23].time);
    hour23temp.textContent = data.forecast.forecastday[0].hour[23].temp_c + '°C';

    hour0.style.borderRight = '0.5px solid black';
    hour0.style.borderBottom = '0.5px solid black'
    hour0.style.borderRadius = '0px';
    hour0.style.backgroundColor = 'white'
    
    hour1.style.borderRight = '0.5px solid black';
    hour1.style.borderBottom = '0.5px solid black'
    hour1.style.borderRadius = '0px';
    hour1.style.backgroundColor = 'white'
    
    hour2.style.borderRight = '0.5px solid black';
    hour2.style.borderBottom = '0.5px solid black'
    hour2.style.borderRadius = '0px';
    hour2.style.backgroundColor = 'white'
    
    hour3.style.borderRight = '0.5px solid black';
    hour3.style.borderBottom = '0.5px solid black'
    hour3.style.borderRadius = '0px';
    hour3.style.backgroundColor = 'white'
    
    hour4.style.borderRight = '0.5px solid black';
    hour4.style.borderBottom = '0.5px solid black'
    hour4.style.borderRadius = '0px';
    hour4.style.backgroundColor = 'white'
    
    hour5.style.borderRight = '0.5px solid black';
    hour5.style.borderBottom = '0.5px solid black'
    hour5.style.borderRadius = '0px';
    hour5.style.backgroundColor = 'white'
    
    hour6.style.borderRight = '0.5px solid black';
    hour6.style.borderBottom = '0.5px solid black'
    hour6.style.borderRadius = '0px';
    hour6.style.backgroundColor = 'white'
    
    hour7.style.borderRight = '0.5px solid black';
    hour7.style.borderBottom = '0.5px solid black'
    hour7.style.borderRadius = '0px';
    hour7.style.backgroundColor = 'white'
    
    hour8.style.borderRight = '0.5px solid black';
    hour8.style.borderBottom = '0.5px solid black'
    hour8.style.borderRadius = '0px';
    hour8.style.backgroundColor = 'white'
    
    hour9.style.borderRight = '0.5px solid black';
    hour9.style.borderBottom = '0.5px solid black'
    hour9.style.borderRadius = '0px';
    hour9.style.backgroundColor = 'white'
    
    hour10.style.borderRight = '0.5px solid black';
    hour10.style.borderBottom = '0.5px solid black';
    hour10.style.borderRadius = '0px';
    hour10.style.backgroundColor = 'white'
    
    hour11.style.borderRight = '0.5px solid black';
    hour11.style.borderBottom = '0.5px solid black';
    hour11.style.borderRadius = '0px';
    hour11.style.backgroundColor = 'white'
    
    hour12.style.borderRight = '0.5px solid black';
    hour12.style.borderBottom = '0.5px solid black';
    hour12.style.borderRadius = '0px';
    hour12.style.backgroundColor = 'white'
    
    hour13.style.borderRight = '0.5px solid black';
    hour13.style.borderBottom = '0.5px solid black';
    hour13.style.borderRadius = '0px';
    hour13.style.backgroundColor = 'white'
    
    hour14.style.borderRight = '0.5px solid black';
    hour14.style.borderBottom = '0.5px solid black';
    hour14.style.borderRadius = '0px';
    hour14.style.backgroundColor = 'white'
    
    hour15.style.borderRight = '0.5px solid black';
    hour15.style.borderBottom = '0.5px solid black';
    hour15.style.borderRadius = '0px';
    hour15.style.backgroundColor = 'white'
    
    hour16.style.borderRight = '0.5px solid black';
    hour16.style.borderBottom = '0.5px solid black';
    hour16.style.borderRadius = '0px';
    hour16.style.backgroundColor = 'white'
    
    hour17.style.borderRight = '0.5px solid black';
    hour17.style.borderBottom = '0.5px solid black';
    hour17.style.borderRadius = '0px';
    hour17.style.backgroundColor = 'white'
    
    hour18.style.borderRight = '0.5px solid black';
    hour18.style.borderBottom = '0.5px solid black';
    hour18.style.borderRadius = '0px';
    hour18.style.backgroundColor = 'white'
    
    hour19.style.borderRight = '0.5px solid black';
    hour19.style.borderBottom = '0.5px solid black';
    hour19.style.borderRadius = '0px';
    hour19.style.backgroundColor = 'white'
    
    hour20.style.borderRight = '0.5px solid black';
    hour20.style.borderBottom = '0.5px solid black';
    hour20.style.borderRadius = '0px';
    hour20.style.backgroundColor = 'white'
    
    hour21.style.borderRight = '0.5px solid black';
    hour21.style.borderBottom = '0.5px solid black';
    hour21.style.borderRadius = '0px';
    hour21.style.backgroundColor = 'white'
    
    hour22.style.borderRight = '0.5px solid black';
    hour22.style.borderBottom = '0.5px solid black';
    hour22.style.borderRadius = '0px';
    hour22.style.backgroundColor = 'white'
    
    hour23.style.borderBottom = '0.5px solid black';
    hour23.style.borderRadius = '0px';
    hour23.style.backgroundColor = 'white'

    f.addEventListener('click', () => {        
    hour0temp.textContent = data.forecast.forecastday[0].hour[0].temp_f + '°F'; 
    hour1temp.textContent = data.forecast.forecastday[0].hour[1].temp_f + '°F'; 
    hour2temp.textContent = data.forecast.forecastday[0].hour[2].temp_f + '°F'; 
    hour3temp.textContent = data.forecast.forecastday[0].hour[3].temp_f + '°F'; 
    hour4temp.textContent = data.forecast.forecastday[0].hour[4].temp_f + '°F'; 
    hour5temp.textContent = data.forecast.forecastday[0].hour[5].temp_f + '°F'; 
    hour6temp.textContent = data.forecast.forecastday[0].hour[6].temp_f + '°F'; 
    hour7temp.textContent = data.forecast.forecastday[0].hour[7].temp_f + '°F'; 
    hour8temp.textContent = data.forecast.forecastday[0].hour[8].temp_f + '°F'; 
    hour9temp.textContent = data.forecast.forecastday[0].hour[9].temp_f + '°F'; 
    hour10temp.textContent = data.forecast.forecastday[0].hour[10].temp_f + '°F'; 
    hour11temp.textContent = data.forecast.forecastday[0].hour[11].temp_f + '°F'; 
    hour12temp.textContent = data.forecast.forecastday[0].hour[12].temp_f + '°F'; 
    hour13temp.textContent = data.forecast.forecastday[0].hour[13].temp_f + '°F'; 
    hour14temp.textContent = data.forecast.forecastday[0].hour[14].temp_f + '°F'; 
    hour15temp.textContent = data.forecast.forecastday[0].hour[15].temp_f + '°F'; 
    hour16temp.textContent = data.forecast.forecastday[0].hour[16].temp_f + '°F'; 
    hour17temp.textContent = data.forecast.forecastday[0].hour[17].temp_f + '°F'; 
    hour18temp.textContent = data.forecast.forecastday[0].hour[18].temp_f + '°F'; 
    hour19temp.textContent = data.forecast.forecastday[0].hour[19].temp_f + '°F'; 
    hour20temp.textContent = data.forecast.forecastday[0].hour[20].temp_f + '°F'; 
    hour21temp.textContent = data.forecast.forecastday[0].hour[21].temp_f + '°F'; 
    hour22temp.textContent = data.forecast.forecastday[0].hour[22].temp_f + '°F'; 
    hour23temp.textContent = data.forecast.forecastday[0].hour[23].temp_f + '°F'; 
})

c.addEventListener('click', () => {
    hour0temp.textContent = data.forecast.forecastday[0].hour[0].temp_c + '°C'; 
    hour1temp.textContent = data.forecast.forecastday[0].hour[1].temp_c + '°C'; 
    hour2temp.textContent = data.forecast.forecastday[0].hour[2].temp_c + '°C'; 
    hour3temp.textContent = data.forecast.forecastday[0].hour[3].temp_c + '°C'; 
    hour4temp.textContent = data.forecast.forecastday[0].hour[4].temp_c + '°C'; 
    hour5temp.textContent = data.forecast.forecastday[0].hour[5].temp_c + '°C'; 
    hour6temp.textContent = data.forecast.forecastday[0].hour[6].temp_c + '°C'; 
    hour7temp.textContent = data.forecast.forecastday[0].hour[7].temp_c + '°C'; 
    hour8temp.textContent = data.forecast.forecastday[0].hour[8].temp_c + '°C'; 
    hour9temp.textContent = data.forecast.forecastday[0].hour[9].temp_c + '°C'; 
    hour10temp.textContent = data.forecast.forecastday[0].hour[10].temp_c + '°C'; 
    hour11temp.textContent = data.forecast.forecastday[0].hour[11].temp_c + '°C'; 
    hour12temp.textContent = data.forecast.forecastday[0].hour[12].temp_c + '°C'; 
    hour13temp.textContent = data.forecast.forecastday[0].hour[13].temp_c + '°C'; 
    hour14temp.textContent = data.forecast.forecastday[0].hour[14].temp_c + '°C'; 
    hour15temp.textContent = data.forecast.forecastday[0].hour[15].temp_c + '°C'; 
    hour16temp.textContent = data.forecast.forecastday[0].hour[16].temp_c + '°C'; 
    hour17temp.textContent = data.forecast.forecastday[0].hour[17].temp_c + '°C'; 
    hour18temp.textContent = data.forecast.forecastday[0].hour[18].temp_c + '°C'; 
    hour19temp.textContent = data.forecast.forecastday[0].hour[19].temp_c + '°C'; 
    hour20temp.textContent = data.forecast.forecastday[0].hour[20].temp_c + '°C'; 
    hour21temp.textContent = data.forecast.forecastday[0].hour[21].temp_c + '°C'; 
    hour22temp.textContent = data.forecast.forecastday[0].hour[22].temp_c + '°C'; 
    hour23temp.textContent = data.forecast.forecastday[0].hour[23].temp_c + '°C'; 
})

    })
    .catch(function(err){
        console.log(err)
    })
}

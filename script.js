
var APIKey = 'fcde975970e9e737df709b0047ed24b3';
var search = document.getElementById('search-form');
var today = document.getElementById('city-today');
var button = document.getElementById('search-bttn');
var MainDate = document.getElementById('MainDay');
var ForecastDay1 = document.getElementById('Day1');
var ForecastDay2 = document.getElementById('Day2');
var ForecastDay3 = document.getElementById('Day3');
var ForecastDay4 = document.getElementById('Day4');
var ForecastDay5 = document.getElementById('Day5');

function updateSearch() {
    coordinates = 'http://api.openweathermap.org/geo/1.0/direct?q=' + search.value + '&limit=1&appid=' + APIKey;
    console.log(search.value);

    fetch(coordinates)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var lon = data[0].lon;
            console.log(lon)
            var lat = data[0].lat;
            console.log(lat)
            queryURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + "&lon=" + lon + '&appid=' + APIKey + '&units=imperial';
            fetch(queryURL)
                .then( function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    today.textContent = data.city.name;
                    var todaysDate = data.list[0].dt_txt;
                    console.log(todaysDate)
                    var todayDateDisplay = dayjs(todaysDate).format('MM/DD/YYYY');
                    console.log(todayDateDisplay);
                    MainDate.textContent = todayDateDisplay;
                    var forecast1 = dayjs(todaysDate).add(1, 'd').format('MM/DD/YYYY');
                    console.log(forecast1);
                    ForecastDay1.textContent = forecast1;
                    var forecast2 = dayjs(todaysDate).add(2, 'd').format('MM/DD/YYYY');
                    console.log(forecast2);
                    ForecastDay2.textContent = forecast2;
                    var forecast3 = dayjs(todaysDate).add(3, 'd').format('MM/DD/YYYY');
                    console.log(forecast3);
                    ForecastDay3.textContent = forecast3;
                    var forecast4 = dayjs(todaysDate).add(4, 'd').format('MM/DD/YYYY');
                    console.log(forecast4);
                    ForecastDay4.textContent = forecast4;
                    var forecast5 = dayjs(todaysDate).add(5, 'd').format('MM/DD/YYYY');
                    console.log(forecast5);
                    ForecastDay5.textContent = forecast5;
                })
        })
        

}

button.addEventListener("click", updateSearch);


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
var MainDayTemp = document.getElementById('MainDayTemp');
var MainDayWind = document.getElementById('MainDayWind');
var MainDayHum = document.getElementById('MainDayHum');
var icon = document.getElementById('icon1');
var Day1Temp = document.getElementById('Day1Temp');
var Day1Wind = document.getElementById('Day1Wind');
var Day1Hum = document.getElementById('Day1Hum');
var icon1 = document.getElementById('icon2');
var Day2Temp = document.getElementById('Day2Temp');
var Day2Wind = document.getElementById('Day2Wind');
var Day2Hum = document.getElementById('Day2Hum');
var icon2 = document.getElementById('icon3');
var Day3Temp = document.getElementById('Day3Temp');
var Day3Wind = document.getElementById('Day3Wind');
var Day3Hum = document.getElementById('Day3Hum');
var icon3 = document.getElementById('icon4');
var Day4Temp = document.getElementById('Day4Temp');
var Day4Wind = document.getElementById('Day4Wind');
var Day4Hum = document.getElementById('Day4Hum');
var icon4 = document.getElementById('icon5');
var Day5Temp = document.getElementById('Day5Temp');
var Day5Wind = document.getElementById('Day5Wind');
var Day5Hum = document.getElementById('Day5Hum');
var icon5 = document.getElementById('icon6');
var Atlanta = document.getElementById('Atlanta');

function clickedAtlanta() {
    search.value = 'Atlanta';
}

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
            queryURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + "&lon=" + lon + '&limit=70&appid=' + APIKey + '&units=imperial';
            fetch(queryURL)
                .then( function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    var index =0;
                    today.textContent = data.city.name;
                    var todaysDate = data.list[index].dt_txt;
                    console.log(todaysDate)
                    var todayDateDisplay = dayjs(todaysDate).format('MM/DD/YYYY');
                    console.log(todayDateDisplay);
                    MainDate.textContent = todayDateDisplay;
                    MainDayTemp.textContent = ('Temperature: ' + data.list[index].main.temp + ' °F');
                    MainDayWind.textContent = ('Wind: ' + data.list[index].wind.speed + ' MPH');
                    MainDayHum.textContent = ('Humidity: ' + data.list[index].main.humidity + ' %');
                    if( data.list[index].weather[0].main === 'Clear') {
                        icon.innerHTML = "<img src='Sunny.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Clouds') {
                        icon.innerHTML = "<img src='Cloudy.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Snow') {
                        icon.innerHTML = "<img src='Snow.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Rain') {
                        icon.innerHTML = "<img src='Rain.png' width='50' height='60' class='center'/>";
                    }

                    var forecast1 = dayjs(todaysDate).add(1, 'd').format('MM/DD/YYYY');
                    console.log(forecast1);
                    index = index + 8;
                    ForecastDay1.textContent = forecast1;
                    Day1Temp.textContent = ('Temp: ' + data.list[index].main.temp + ' °F');
                    Day1Wind.textContent = ('Wind: ' + data.list[index].wind.speed + ' MPH');
                    Day1Hum.textContent = ('Humidity: ' + data.list[index].main.humidity + ' %');
                    if( data.list[index].weather[0].main === 'Clear') {
                        icon1.innerHTML = "<img src='Sunny.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Clouds') {
                        icon1.innerHTML = "<img src='Cloudy.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Snow') {
                        icon1.innerHTML = "<img src='Snow.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Rain') {
                        icon1.innerHTML = "<img src='Rain.png' width='50' height='60' class='center'/>";
                    }

                    var forecast2 = dayjs(todaysDate).add(2, 'd').format('MM/DD/YYYY');
                    console.log(forecast2);
                    index = index + 8;
                    ForecastDay2.textContent = forecast2;
                    Day2Temp.textContent = ('Temp: ' + data.list[index].main.temp + ' °F');
                    Day2Wind.textContent = ('Wind: ' + data.list[index].wind.speed + ' MPH');
                    Day2Hum.textContent = ('Humidity: ' + data.list[index].main.humidity + ' %');
                    if( data.list[index].weather[0].main === 'Clear') {
                        icon2.innerHTML = "<img src='Sunny.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Clouds') {
                        icon2.innerHTML = "<img src='Cloudy.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Snow') {
                        icon2.innerHTML = "<img src='Snow.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Rain') {
                        icon2.innerHTML = "<img src='Rain.png' width='50' height='60' class='center'/>";
                    }

                    var forecast3 = dayjs(todaysDate).add(3, 'd').format('MM/DD/YYYY');
                    console.log(forecast3);
                    index = index + 8;
                    ForecastDay3.textContent = forecast3;
                    Day3Temp.textContent = ('Temp: ' + data.list[index].main.temp + ' °F');
                    Day3Wind.textContent = ('Wind: ' + data.list[index].wind.speed + ' MPH');
                    Day3Hum.textContent = ('Humidity: ' + data.list[index].main.humidity + ' %');
                    if( data.list[index].weather[0].main === 'Clear') {
                        icon3.innerHTML = "<img src='Sunny.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Clouds') {
                        icon3.innerHTML = "<img src='Cloudy.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Snow') {
                        icon3.innerHTML = "<img src='Snow.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Rain') {
                        icon3.innerHTML = "<img src='Rain.png' width='50' height='60' class='center'/>";
                    }

                    var forecast4 = dayjs(todaysDate).add(4, 'd').format('MM/DD/YYYY');
                    console.log(forecast4);
                    index = index + 8;
                    ForecastDay4.textContent = forecast4;
                    Day4Temp.textContent = ('Temp: ' + data.list[index].main.temp + ' °F');
                    Day4Wind.textContent = ('Wind: ' + data.list[index].wind.speed + ' MPH');
                    Day4Hum.textContent = ('Humidity: ' + data.list[index].main.humidity + ' %');
                    if( data.list[index].weather[0].main === 'Clear') {
                        icon4.innerHTML = "<img src='Sunny.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Clouds') {
                        icon4.innerHTML = "<img src='Cloudy.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Snow') {
                        icon4.innerHTML = "<img src='Snow.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Rain') {
                        icon4.innerHTML = "<img src='Rain.png' width='50' height='60' class='center'/>";
                    }

                    var forecast5 = dayjs(todaysDate).add(5, 'd').format('MM/DD/YYYY');
                    console.log(forecast5);
                    index = index + 7;
                    ForecastDay5.textContent = forecast5;
                    Day5Temp.textContent = ('Temp: ' + data.list[index].main.temp + ' °F');
                    Day5Wind.textContent = ('Wind: ' + data.list[index].wind.speed + ' MPH');
                    Day5Hum.textContent = ('Humidity: ' + data.list[index].main.humidity + ' %');
                    if( data.list[index].weather[0].main === 'Clear') {
                        icon5.innerHTML = "<img src='Sunny.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Clouds') {
                        icon5.innerHTML = "<img src='Cloudy.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Snow') {
                        icon5.innerHTML = "<img src='Snow.png' width='50' height='60' class='center'/>";
                    }
                    else if ( data.list[index].weather[0].main === 'Rain') {
                        icon5.innerHTML = "<img src='Rain.png' width='50' height='60' class='center'/>";
                    }

                })
        })
        

}

button.addEventListener("click", updateSearch);
Atlanta.addEventListener("click", clickedAtlanta);

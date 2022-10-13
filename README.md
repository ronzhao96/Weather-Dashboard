# Weather-Dashboard-
Weather dashboard utilizing OpenWeather API
<br>

## Objectives
* Create a weather dashboard utilizing OpenWeather API 
* Includes a search bar which takes text input and displays weather information after form submit
* Includes a search history that displays previously searched cities
* When a previously searched city is clicked, relevant weather information displays in the display container

## Technologies Used
* Javascript
* HTML
* CSS
* Bootstrap
* OpenWeather API
* Moment.js

## Knowledge Aquired 
* Learned how to use local storage to store pertinent information
```
    var input = inputEl.value;

    localStorage.setItem("id=" + input, input);
```
* Learned how to use OpenWeather API and fetch() to request and receive relevant data
```
 var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    
    fetch (apiURL)
        .then (function (response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayData(data);
                });
            }
        });
```
* Learned how to retrieve fetched data and dynamically generate elements to dispaly data
```
 var name = data.name;
    var date = moment().format("MM/DD/YYYY");
    var temp = data.main.temp;
    var tempMin = data.main.temp_min;
    var tempMax = data.main.temp_max;
    var humidity = data.main.humidity;
    var description = data.weather[0].description;

    var cardTitle = document.createElement("h2");
    cardTitle.classList = "card-title text-align-center";
    cardTitle.textContent = name;
    var cardSub1 = document.createElement("h3");
    cardSub1.classList = "card-subtitle mb-2 text-align-center";
    cardSub1.textContent = date;
    var cardSub2 = document.createElement("h3");
    cardSub2.classList = "card-subtitle mb-2 text-align-center";
    cardSub2.textContent = "Min: " + tempMin + "F    " + temp + "F    " + "Max: " + tempMax + "F";
    var cardSub3 = document.createElement("h3");
    cardSub3.classList = "card-subtitle mb-2 text-align-center";
    cardSub3.textContent = "Humidity: " + humidity;
    var cardSub4 = document.createElement("h3");
    cardSub4.classList = "card-subtitle mb-2 text-align-center";
    cardSub4.textContent = "Description: " + description;

    searchCard.appendChild(cardTitle);
    searchCard.appendChild(cardSub1);
    searchCard.appendChild(cardSub2);
    searchCard.appendChild(cardSub3);
    searchCard.appendChild(cardSub4);
```

## BUGS and Other Issues
* I couldn't request for the 5-day weather forecast. I checked console.log(data) multiple times but couldn't find it. 
![img](Screen%20Shot%202022-10-13%20at%202.00.20%20AM.png)

## Screenshots
![img](_Users_kellee_Desktop_Weather-Dashboard-_index.html_%20(2).png)

## Links
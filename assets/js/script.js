var userFormEL = document.getElementById("user-form");
var inputEl = document.getElementById("citySearch");
var listEl = document.getElementById("list");
var searchCard = document.getElementById("searchCard");
var apiKey = "c496fa2625e14260e330242c92f78eb3";

function formHandler(event) {   
    event.preventDefault();
    var input = inputEl.value;
    inputEl.textContent = "";
    
    if (!input) {
        alert("Please enter a valid city name in the search bar");
        return;
    }

    localStorage.setItem("input", input);


    if (localStorage.input0) {        
        for (i = 0; i < 8; i++) {
            if (localStorage.input + i == input) {
                return;
            }
            else {
                localStorage.setItem("input" + Number(i + 1), input);
                return;
            }
        }
    }
    else {
        localStorage.setItem("input0", input);
    }

    displaySaved();
    getWeather(input);
}

function displaySaved() {
    for (i = 0; i < 8; i++) {
        var name = localStorage.getItem("input" + i);
        
        var searchHistoryContainer = document.createElement("div");
        searchHistoryContainer.classList = "savedCities m-1 d-flex w-100 justify-content-center";
        var searchHistoryName = document.createElement("button");
        searchHistoryName.classList = "mb-2 font-weight-normal text-align-center btn-block";
        searchHistoryName.setAttribute("id", "id=" + input);
        searchHistoryName.setAttribute("onClick", "reply_click(this.id)");
        
        searchHistoryName.textContent = name;
        
        searchHistoryContainer.appendChild(searchHistoryName);
        listEl.appendChild(searchHistoryContainer);
    }
}

function getWeather(city) {
    if (localStorage.input) {
        city = localStorage.getItem("input");
    }
    
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
}

function displayData(data) {
    searchCard.textContent = "";

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
    cardSub2.textContent = "Min: " + tempMin + "F         " + "Current: " + temp + "F         " + "Max: " + tempMax + "F";
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
}

function reply_click(clicked_id) {
    var cityName = localStorage.getItem(clicked_id);

    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";
    
    fetch (apiURL)
        .then (function (response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayData(data);
                });
            }
        });
}

userFormEL.addEventListener("submit", formHandler);
window.addEventListener("load", getWeather);
//window.addEventListener("load", )
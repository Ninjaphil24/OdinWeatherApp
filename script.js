let weather = {
    "apiKey":"78e8c0db60ab57fda22716aac4e7b629",
    fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&APPID="
        +this.apiKey)
        .then((response) => response.json())
        .then((data)=>console.log(data))
    },
    displayWeather: function(data) {
        
    }
}
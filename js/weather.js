const url = 'https://api.openweathermap.org/data/2.5/weather?lat=58.417743350534714&lon=45.535171502353&appid=4af562cb0b3a70ab90718fce4662854f'
    //'https://api.openweathermap.org/data/2.5/weather?q=Sharya,RU&appid=4af562cb0b3a70ab90718fce4662854f'
    //api.openweathermap.org/data/2.5/weather?lat=58.417743350534714&lon=45.535171502353&appid=4af562cb0b3a70ab90718fce4662854f
    //58.417743350534714, 45.535171502353
const url2 = "https://api.openweathermap.org/data/2.5/weather?lat=58.417743350534714&lon=45.535171502353&appid=4af562cb0b3a70ab90718fce4662854f"

const url3 = "http://api.openweathermap.org/data/2.5/forecast?lat=58.417743350534714&lon=45.535171502353&appid=4af562cb0b3a70ab90718fce4662854f"

const icon = "http://openweathermap.org/img/wn/";

start = () => {
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            if (result.cod == "404") {
                console.log("Error 404 Weather")
            } else {
                setTempC(result.main.temp);
                setIcon(result.weather[0].icon)
            }
        })

    fetch(url2)
        .then((response) => response.json())
        .then((result) => {
            if (result.cod == "404") {
                console.log("Error 404 Weather")
            } else {
                setTempC2(result.main.temp);
            }
        })

    fetch(url3)
        .then((response) => response.json())
        .then((result) => {
            if (result.cod == "404") {
                console.log("Error 404 Weather")
            } else {
                setTomorrow(result)
            }
        })


}
let tempC;

setIcon = (elem) => {
    document.getElementById("weathIcon").src = icon + elem + ".png"
}

setTempC = (elem) => {
    let tempC = Math.floor(elem - 273);
    document.getElementById("weaterNow").innerHTML = "Сейчас в Сафоново: " + tempC + "°"
}
setTempC2 = (elem) => {
    let tempC2 = Math.round(elem - 273);
}

setTomorrow = (elem) => {
    document.getElementById("weaterTomorrow").innerHTML = "Завтра: " + Math.round(elem.list[8].main.temp - 273) + "°"
    document.getElementById("weathTomorrowIcon").src = icon + elem.list[8].weather[0].icon + ".png"
}
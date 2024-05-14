const APIKEY = "31f252a5f3898639e7da3a20ccb75d58";
function ongeook(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main+"/"+data.main.temp;
    });
}
function ongeoerror()
{
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(ongeook, ongeoerror);

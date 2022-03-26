import React, { useState } from "react";
import "./Weather.css";
import notFound from "../img/notFound.png"

function Weathers() {
  const [weathers, setWeathers] = useState({});
  const [cityName, setCityName] = useState("");
  const key = "859c7f55c85bb60455c9e41789b5a2e5";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${key}`;

  const handleCityName = (e) => {
    e.preventDefault();
    fetch(api)
      .then((res) => res.json())
      .then((data) => setWeathers(data));
    console.log("====================================");
    console.log(weathers);
    console.log("====================================");
  };
  console.log("====================================");
  console.log(weathers);
  console.log("====================================");
  const sun =
    "https://camo.githubusercontent.com/f2011084110823ab2ee90fd16e6fede5e13c1ebae62f9820f234025b0c453d41/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f636c6561722d6461792e737667";

  const cloudy =
    "https://camo.githubusercontent.com/1aab89eda0e0e99d9aa2e7318d8161c370bfb6d75c2945a60f3b0cd1eb8a8c3c/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f706172746c792d636c6f7564792d6461792e737667";

  const rain =
    "https://camo.githubusercontent.com/b4a267d78315b1588f80bb071cbb7e187160e36b7d2c9bf79de3ecfa912a121a/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f7261696e2e737667";

  const haze =
    "https://camo.githubusercontent.com/4c46600e409563843bf55372e08ef26a54e08fa6d965aa8aeb288be72403b06b/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f746f726e61646f2e737667";

  const snow =
    "https://camo.githubusercontent.com/d3c73058ec8bf33e498e196bf75c875ecc9f3313efa7fe12b800092f0071253a/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f636c6561722d6e696768742e737667";

  const showDate = new Date();
  const date = showDate.toDateString();
  return (
    <div className="weathers-container">
      <div className="weathers">
        <h2>Weather App</h2>
        <h3 className="date">{date}</h3>
        <div className="animation-icon">{}</div>
        <form className="input" onSubmit={handleCityName}>
          <input
            type="text"
            
            onChange={(e) => setCityName(e.target.value)}
            placeholder="City Name"
          />
        </form>
        {/* =================== City Not Found ==================== */}
        {weathers.cod === "404" && (
          <div>
            <h3 className="not-found">{weathers.message}</h3>
            <img className="not-found-img" src={notFound}alt="" />
          </div>
          
        )}
        {/* ==================== Found City ===================== */}
        {weathers.id && (
          <div className="weather-details">
            {weathers.weather[0].main === "Clouds" && (
              <img className="weather-icon" src={cloudy} alt="" />
            )}
            {weathers.weather[0].main === "Haze" && (
              <img className="weather-icon" src={haze} alt="" />
            )}
            {weathers.weather[0].main === "Clear" && (
              <img className="weather-icon" src={sun} alt="" />
            )}
            {weathers.weather[0].main === "Sunny" && (
              <img className="weather-icon" src={sun} alt="" />
            )}
            {weathers.weather[0].main === "Rainy" && (
              <img className="weather-icon" src={rain} alt="" />
            )}
            {weathers.weather[0].main === "Windy" && (
              <img className="weather-icon" src={snow} alt="" />
            )}
            <h3>{weathers.weather[0].main}</h3>
            <h2 className="country-name">
              {weathers.name} <small>{weathers.sys.country}</small>
            </h2>

            <h2 className="celsius">{weathers.main.temp}°C</h2>
            <div className="max-min">
              <div className="max">
                <h4>Maximum</h4>
                <p>{weathers.main.temp_max}°C</p>
              </div>
              <div className="min">
                <h4>Minimum</h4>
                <p>{weathers.main.temp_min}°C</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weathers;

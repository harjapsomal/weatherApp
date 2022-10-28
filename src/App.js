import React, { useState, useEffect } from "react";
import { ApiClient } from "./apiClient";
import "./App.css";
import WeatherCard from "./WeatherCard";
// api key
function App() {
  const [weather, changeWeather] = useState({});
  const apiClient = new ApiClient();
  const getWeather = async () => {
    let response = await apiClient.fetchWeather();
    // map data to screen
    changeWeather(response);
  };
  useEffect(() => {
    getWeather();
  }, []);
  // const maxTemp = Math.round(data.main.temp_max);
  // const minTemp = Math.round(data.main.temp_min);
  // date
  const getTodaysDate = (d) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    //   var reply;
    //    reply = url(apiCall);
    //   console.log(reply);
    // }
    // console.log(reply);
    var day = days[d.getDay()]; // Fetches the day of the week
    var date = d.getDate(); // Fetches the date
    var month = months[d.getMonth()]; // Fetches the month
    var year = d.getFullYear(); // Fetches the year
    return `${day} ${date} ${month} ${year}`;
  };
  let v1 = weather.data?.list[0].weather[0].icon;
  let v2 = weather.data?.list[8].weather[0].icon;
  let v3 = weather.data?.list[16].weather[0].icon;
  let v4 = weather.data?.list[24].weather[0].icon;
  let v5 = weather.data?.list[32].weather[0].icon;
  let today = new Date();
  let tomorrow = new Date();
  let day3 = new Date();
  let day4 = new Date();
  let day5 = new Date();

  tomorrow.setDate(today.getDate() + 1);
  day3.setDate(today.getDate() + 2);
  day4.setDate(today.getDate() + 3);
  day5.setDate(today.getDate() + 4);

  return (
    <div className="main">
      {/* <WeatherCard id={1} />   change the following to use weathercard later*/}
      <main>
        <div className="city">5 day forecast for Sheffield, GB</div>
        <div className="row">
          <div className="column">
            <div className="temp">{weather.data?.list[0].main.temp_min}</div>
            <div className="temp">{weather.data?.list[0].main.temp_max}</div>
            <div> min °C max</div>
            <div className="condition">
              {weather.data?.list[0].weather[0].description}
            </div>
            <div className="wind">wind: {weather.data?.list[0].wind.speed}</div>

            <img src={`http://openweathermap.org/img/w/${v1}.png`} />
            <br></br>
            <div className="date">{getTodaysDate(new Date())}</div>
            <br></br>
          </div>
          <div className="column">
            <div className="temp">{weather.data?.list[8].main.temp_min}</div>
            <div className="temp">{weather.data?.list[8].main.temp_max}</div>
            <div> min °C max</div>
            <div className="condition">
              {weather.data?.list[8].weather[0].description}
            </div>
            <div className="wind">wind: {weather.data?.list[8].wind.speed}</div>

            <img src={`http://openweathermap.org/img/w/${v2}.png`} />
            <br></br>
            <div className="date">{getTodaysDate(tomorrow)}</div>
            <br></br>
          </div>
          <div className="column">
            <div className="temp">{weather.data?.list[16].main.temp_min}</div>
            <div className="temp">{weather.data?.list[16].main.temp_max}</div>
            <div> min °C max</div>
            <div className="condition">
              {weather.data?.list[16].weather[0].description}
            </div>
            <div className="wind">
              wind: {weather.data?.list[16].wind.speed}
            </div>

            <img src={`http://openweathermap.org/img/w/${v3}.png`} />
            <br></br>
            <div className="date">{getTodaysDate(day3)}</div>
            <br></br>
          </div>
          <div className="column">
            <div className="temp">{weather.data?.list[24].main.temp_min}</div>
            <div className="temp">{weather.data?.list[24].main.temp_max}</div>
            <div> min °C max</div>
            <div className="condition">
              {weather.data?.list[24].weather[0].description}
            </div>
            <div className="wind">
              wind: {weather.data?.list[24].wind.speed}
            </div>

            <img src={`http://openweathermap.org/img/w/${v4}.png`} />
            <br></br>
            <div className="date">{getTodaysDate(day4)}</div>
            <br></br>
          </div>
          <div className="column">
            <div className="temp">{weather.data?.list[32].main.temp_min}</div>
            <div className="temp">{weather.data?.list[32].main.temp_max}</div>
            <div> min °C max</div>
            <div className="condition">
              {weather.data?.list[32].weather[0].description}
            </div>
            <div className="wind">
              wind: {weather.data?.list[32].wind.speed}
            </div>

            <img src={`http://openweathermap.org/img/w/${v5}.png`} />
            <br></br>
            <div className="date">{getTodaysDate(day5)}</div>
            <br></br>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;

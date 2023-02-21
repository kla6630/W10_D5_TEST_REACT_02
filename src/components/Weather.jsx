import React, { useState, useEffect } from "react";
import { Row, Col, /*Image,*/ Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

import { FaTemperatureHigh, FaTemperatureLow, FaWind } from "react-icons/fa";
import { TbArrowsUp, TbArrowsDown } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import Icone from "./Icone.jsx";

const WeatherFetch = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cityName, setCityName] = useState("Cagliari");

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d55e12edd515f448b49e5c060fad1863`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      }
      setIsLoading(false);
    };
    fetchWeather();
  }, [cityName]);

  const handleSearch = (value) => {
    setCityName(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="my-3">
        <SearchBar placeholder="hello" onSearch={handleSearch} />
      </div>

      <Container className="my-5">
        <Row className="row_big">
          <Col sm={12} md={8} className="Col_01">
            <div>
              <h4>Weather in</h4>
              <h2>{cityName}</h2>
              <h5>Country: {weather.sys.country}</h5>
              <h5>Sky: {weather.weather[0].description}</h5>
            </div>

            <h1>
              {weather.main.temp} <h4>°C</h4>
            </h1>

            <div>
              <Icone tempo={weather.weather[0].icon} />
              {/* <Image
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
              /> */}
            </div>
          </Col>

          <Col sm={12} md={3} className="p-4 Col_02">
            <h4>Details</h4>
            <div>
              <h5>
                <FaTemperatureHigh /> {weather.main.temp_max} °C <TbArrowsUp />
              </h5>
              <h5>
                <FaTemperatureLow /> {weather.main.temp_min} °C <TbArrowsDown />
              </h5>

              <h5>
                <WiHumidity /> {weather.main.humidity} %
              </h5>

              <h5>
                <FaWind /> {weather.wind.speed} km/h
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeatherFetch;

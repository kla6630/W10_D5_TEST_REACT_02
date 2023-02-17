import { React, useState, useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

const WeatherFetch = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let cityName = "Sassari";

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d55e12edd515f448b49e5c060fad1863` //q=$cityName}
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      }
      setIsLoading(false);
    };
    fetchWeather();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-5">
      <h4>Il Meteo Attuale a {cityName}</h4>
      <Row>
        <Col>
          <Image
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
            fluid
          />
          <div>{weather.weather[0].description}</div>
        </Col>
        <Col>
          <div>Temperatura: {weather.main.temp} °C</div>
          <div>Umidità: {weather.main.humidity} %</div>
          <div>Velocità del vento: {weather.wind.speed} km/h</div>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherFetch;

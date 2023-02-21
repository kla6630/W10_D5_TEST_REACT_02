//props.tempo="sole"
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayHail,
  WiThunderstorm,
  WiSnow,
  WiWindy,
  /*Aggiungi qui l'gli import per le icone notturne, se vuoi*/
} from "react-icons/wi";

const Icone = (props) => {
  return props.tempo === "01d" ? (
    <WiDaySunny className="WeatherIcon" />
  ) : props.tempo === "02d" ? (
    <WiDayCloudy className="WeatherIcon" />
  ) : props.tempo === "03d" ? (
    <WiCloud className="WeatherIcon" />
  ) : props.tempo === "04d" ? (
    <WiCloudy className="WeatherIcon" />
  ) : props.tempo === "09d" ? (
    <WiRain className="WeatherIcon" />
  ) : props.tempo === "10d" ? (
    <WiDayHail className="WeatherIcon" />
  ) : props.tempo === "11d" ? (
    <WiThunderstorm className="WeatherIcon" />
  ) : props.tempo === "13d" ? (
    <WiSnow className="WeatherIcon" />
  ) : props.tempo === "50d" ? (
    <WiWindy className="WeatherIcon" />
  ) : /*night icons*/
  props.tempo === "01n" ? (
    <WiDaySunny className="WeatherIcon WeatherIconNight" />
  ) : props.tempo === "02n" ? (
    <WiDayCloudy className="WeatherIcon WeatherIconNight" />
  ) : props.tempo === "03n" ? (
    <WiCloud className="WeatherIcon WeatherIconNight" />
  ) : props.tempo === "04n" ? (
    <WiCloudy className="WeatherIcon WeatherIconNight" />
  ) : props.tempo === "09n" ? (
    <WiRain className="WeatherIcon WeatherIconNight" />
  ) : props.tempo === "10n" ? (
    <WiDayHail className="WeatherIcon WeatherIcon" />
  ) : props.tempo === "11n" ? (
    <WiThunderstorm className="WeatherIcon WeatherIconNight" />
  ) : props.tempo === "13n" ? (
    <WiSnow className="WeatherIcon WeatherIconNight" />
  ) : props.tempo === "50n" ? (
    <WiWindy className="WeatherIcon WeatherIconNight" />
  ) : (
    /*dopo gli ultimi ":" abbiamo l'else*/ <WiWindy />
  );

  // condizion, poi dopo ? se la risposta è si fai un'altra cosa dopo i : controlla altra condizione.//
};

export default Icone;

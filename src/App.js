import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherFetch from "./components/Weather";

import WeatherAppNavbar from "./components/Navbar";

import WeatherAppFooter from "./components/Footer";

function App() {
  return (
    <>
      <WeatherAppNavbar />
      <WeatherFetch />
      <WeatherAppFooter />
   </>
  );
}

export default App;

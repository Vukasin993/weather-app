import React, { useEffect, useState } from 'react';
import './landing-page.scss';
import qs from "qs";
import { createBrowserHistory } from "history";
import Input from '../../components/input/index';
import search from '../../assets/images/search.svg';
import loading from '../../assets/images/loading.svg';
import cloudy from '../../assets/images/cloudy.svg';
import ReactFlagsSelect from 'react-flags-select';
import { getColor, getGradient } from '../../utils/colors';
import { percentColors, constants, isEmpty, countriesStateCode, countriesArray, cities } from '../../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherData from '../../components/weatherData/index';

const API_KEY = '4e308dad5b0ffc36440e738859db44c6';

const LandingPage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [sevenDaysData, setSevenDaysData] = useState({});
  const [cityName, setCityName] = useState('');
  const [stateCode, setStateCode] = useState('NL');
  const [update, setUpdate] = useState(false);
  const [updateWeather, setUpdateWeather] = useState(false);
  const [gradient, setGradient] = useState('');
  const [display, setDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = createBrowserHistory();

  const getWeather = async (city) => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${stateCode}&cnt=${constants.cnt}&units=metric&appid=${API_KEY}`);
    if (api_call.ok) {
      const response = await api_call.json();

      if (stateCode !== response.sys.country) {
        toast.warning("City isn't in that country!");
      } else if (stateCode === response.sys.country) {
        setWeatherData(response);
        constants.percentage = (40 + response.main.temp) / 80;
        const endingColor = getColor(constants.percentage, percentColors);
        const newGradient = getGradient(response.main.temp, endingColor);
        setGradient(newGradient);
        setUpdateWeather(true);
      }
    } else {
      toast.warning("We can't find data for that city!");
    }
    setIsLoading(false);
  };

  const sevendDaysWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&units=metric&appid=${API_KEY}`);
    const response = await api_call.json();
    setSevenDaysData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    if (updateWeather) {
      setIsLoading(true);
      sevendDaysWeather();
    }
  }, [updateWeather]);

  useEffect(() => {
    const filterParams = history.location.search.substr(1);
    const filtersFromParams = qs.parse(filterParams);
    if (filtersFromParams.cityName) {
      setCityName(String(filtersFromParams.cityName));
      setStateCode(String(filtersFromParams.stateCode));
      setUpdate(!updateWeather);
    };
  }, []);

  useEffect(() => {
    history.push(`?cityName=${cityName}&stateCode=${stateCode}`);
  }, [cityName]);

  const handleSearch = (e) => {
    e.preventDefault();
    setError(false);
    setIsLoading(false);
    setCityName(e.target.value);
    setDisplay(true);
  };

  const addCityFromArray = city => {
    setCityName(city);
    setDisplay(false);
    setError(false);
  };

  useEffect(() => {
    if (cityName !== '') {
      const cutSpaces = cityName.trim();
      const capitalizeLetters = cutSpaces.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      setCityName(capitalizeLetters);
      setIsLoading(true);
      getWeather(capitalizeLetters);
    }
  }, [update]);

  const getTemperature = () => {
    if (cityName !== '') {
      setUpdate(!update);
    } else {
      setError(true);
      toast.warning("You must insert a city name!");
    }
  };

  const getTemperatureFromEnter = (e) => {
    if (e.key === 'Enter') {
      if (stateCode !== '' && cityName !== '') {
        setUpdate(!update);
      } else {
        setError(true);
        toast.warning("You must insert a city name!");
      }
    }
  };

  const handleStateCode = (code) => {
    setStateCode(code);
  };

  return (
    <div className="wrapper" style={{ background: !isEmpty(weatherData) ? `${gradient}` : `linear-gradient(to right bottom, #cee8f7, #e4f5ff, #fff3e3)` }} onClick={() => setDisplay(false)}>
      <ToastContainer limit={3} autoClose={2500} />
      <div className={!isEmpty(weatherData) ? "search" : "center-search"}>
        <div className="icon">
          {!isEmpty(weatherData) ? <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main} /> : <img src={cloudy} alt="cloudy" />}
        </div>
        <div className="select">
          <ReactFlagsSelect
            countries={countriesStateCode}
            customLabels={countriesArray}
            selected={stateCode}
            onSelect={code => handleStateCode(code)}
          />
        </div>
        <div className="right">
          <div className="input">
            <Input placeholder="Please enter your location..." value={cityName} onChange={handleSearch} onKeyPress={getTemperatureFromEnter} onClick={() => setDisplay(!display)} />
            {display && (
              <div className='list-of-cities'>
                {cities.filter((city) => { return city.code === stateCode }).filter((v) => v.label.indexOf(cityName.toLowerCase()) > -1).map((v, i) => {
                  return <div onClick={() => addCityFromArray(v.value)} key={i}>
                    <p>{v.value}</p>
                  </div>
                })}
              </div>
            )}
            {error ? <div className="message-alert"><p>*required</p></div> : null}
          </div>
          <div className="icon">
            <img src={isLoading ? loading : search} alt="Search" onClick={getTemperature} style={{ opacity: cityName === '' ? '0.3' : '1' }} />
          </div>
        </div>
      </div>
      <WeatherData weatherData={weatherData} sevenDaysData={sevenDaysData} />
    </div>
  );
};

export default LandingPage;

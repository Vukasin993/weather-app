import React, { useEffect, useState } from 'react';
import './landing-page.scss';
import Input from '../../components/input/index';
import search from '../../assets/images/search.svg';
import cloudy from '../../assets/images/cloudy.svg';
import ReactFlagsSelect from 'react-flags-select';
import { getColor, getGradient } from '../../utils/colors';
import { percentColors, constants, isEmpty, countriesStateCode, countriesArray } from '../../utils/constants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '4e308dad5b0ffc36440e738859db44c6';

const LandingPage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [sevenDaysData, setSevenDaysData] = useState({});
  const [cityName, setCityName] = useState('');
  const [stateCode, setStateCode] = useState('NL');
  const [update, setUpdate] = useState(false);
  const [updateWeather, setUpdateWeather] = useState(false);
  const getMonth = { month: 'long' };
  const [gradient, setGradient] = useState('');
  const date = new Date();

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
        const test2 = getGradient(response.main.temp, endingColor);
        console.log("TEST @", test2)
        setGradient(test2);
        setUpdateWeather(true);
      }
    } else {
      toast.warning("You must choose country and city!");
    }
  }

  const sevendDaysWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&units=metric&appid=${API_KEY}`);
    const response = await api_call.json();
    setSevenDaysData(response);
  }

  useEffect(() => {
    if (updateWeather) {
      sevendDaysWeather();
    }
  }, [updateWeather]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };

  useEffect(() => {
    if (stateCode !== '' && cityName !== '') {
      const cutSpaces = cityName.trim();
      const capitalizeLetters = cutSpaces.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
      setCityName(capitalizeLetters);
      getWeather(capitalizeLetters);
    }
  }, [update]);

  const getResult = () => {
    if (stateCode !== '' && cityName !== '') {
      setUpdate(!update)
    } else {
      toast.warning("You must choose country and city!");
    }
  }

  const getResultFromEnter = (e) => {
    if (e.key === 'Enter') {
      if (stateCode !== '' && cityName !== '') {
        setUpdate(!update);
      } else {
        toast.warning("You must choose country and city!");
      }
    }

  }

  const handleCode = (code) => {
    setStateCode(code);
  }

  return (
    <div className="wrapper" style={{ background: !isEmpty(weatherData) ? `${gradient}` : `linear-gradient(to right bottom, #cee8f7, #e4f5ff, #fff3e3)` }}>
      <ToastContainer />
      <div className={!isEmpty(weatherData) ? "search" : "center-search"}>
        <div className="icon">
          {!isEmpty(weatherData) ? <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main} /> : <img src={cloudy} alt="cloudy" />}
        </div>
        <div className="select">
          <ReactFlagsSelect
            countries={countriesStateCode}
            customLabels={countriesArray}
            selected={stateCode}
            onSelect={code => handleCode(code)}
          />
        </div>
        <div className="right">
          <div className="input"><Input placeholder="Please enter your location..." value={cityName} onChange={handleSearch} onKeyPress={getResultFromEnter} /></div>
          <div className="icon">
            <img src={search} alt="Search" onClick={getResult} style={{ opacity: cityName === '' ? '0.3' : '1' }} />
          </div>
        </div>
      </div>
      {!isEmpty(weatherData) ? <div className='weather-data'>
        <div className='ten-days-temp'>
          <p className='date-range'>{new Intl.DateTimeFormat('en-US', getMonth).format(date)} {date.getDate()} - {date.getDate() + 7} {date.getFullYear()}</p>
          <span className='average-temperature'>{Math.round(weatherData.main.temp)}<span className='celsius'>&#8451;</span></span>
        </div>

        <div className="seven-days">
          {!isEmpty(sevenDaysData) && sevenDaysData.daily.map((d, i) => {
            if (i + 1 !== sevenDaysData.daily.length) {
              return (
                <div className="seven-days-card" key={i}>
                  <img
                    src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
                    alt={d.weather[0].main}
                  />
                  <span className='card-day'>{new Date(d.dt * 1000).toLocaleString('en-us', { weekday: 'long' })}</span>
                  <span className='card-temperature'>{Math.round(d.temp.day)}<span className='small-celsius'>&#8451;</span></span>
                </div>
              )
            }
          })}
        </div>
      </div> : null}
    </div>
  );
}

export default LandingPage;

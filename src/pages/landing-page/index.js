import React, { useEffect, useState} from 'react';
import './landing-page.scss';
import Input from '../../components/input/index';
import search from '../../assets/images/search.svg';
import cloudy from '../../assets/images/cloudy.svg';
import ReactFlagsSelect from 'react-flags-select';

const API_KEY = '4e308dad5b0ffc36440e738859db44c6';

const LandingPage = () => {
const [searchTerm, setSearchTerm] = useState('');
const [weatherData, setWeatherData] = useState({});
const [sevenDaysData, setSevenDaysData] = useState({});
const [cityName, setCityName] = useState('');
const [stateCode, setStateCode] = useState('');
const cnt = 10;
const [update, setUpdate] = useState(false);
const [updateWeather, setUpdateWeather] = useState(false);
const [selected, setSelected] = useState('');
const getMonth = { month: 'long'};
const date = new Date();

const isEmpty = (obj) => {
  if (obj === null ||
      obj === undefined ||
      Array.isArray(obj) ||
      typeof obj !== 'object'
  ) {
      return true;
  }
  return Object.getOwnPropertyNames(obj).length === 0;
};

const getWeather = async () => {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${stateCode}&cnt=${cnt}&units=metric&appid=${API_KEY}`);
        const response = await api_call.json();

        if (stateCode !== response.sys.country) {
          alert("CITY ISNT IN THIS COUNTRY")
        } else {
          setWeatherData(response);
          setUpdateWeather(true);
        }

}

const sevendDaysWeather = async () => {
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&units=metric&appid=${API_KEY}`)
  const response = await api_call.json();
  setSevenDaysData(response);
}

console.log("weatherData ", weatherData)

console.log("++++ ", sevenDaysData)



useEffect(() => {
  if (updateWeather) {
    sevendDaysWeather();
  }
},[updateWeather]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setCityName(e.target.value);
  };

useEffect(() => {
  if (stateCode !== '' && cityName !== '') {
    getWeather();
}
}, [update])
  const getResult = () => {
    if (stateCode !== '' && cityName !== '') {
       setUpdate(!update)
    }
  }

  const handleCode = (code) => {
    setStateCode(code);
    setSelected(code)
  }

  return (
    <div className="wrapper">
      <div className={!isEmpty(weatherData) ? "search" : "center-search"}>
          <div className="icon">
          {!isEmpty(weatherData) ? <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main}/> : <img src={cloudy} alt="cloudy" />}
          </div>
          <div className="select">
            <ReactFlagsSelect
              countries={["US", "GB", "FR","DE","IT", "NL", "RS", "HR"]}
              customLabels={{"US": "US","GB": "GB","FR": "FR","DE": "DE","IT": "IT", "NL": "NL", "RS": "RS", "HR": "HR"}}
              selected={selected}
              onSelect={code => handleCode(code)}
            />
          </div>
        <div className="right">
          <div className="input"><Input placeholder="Search" value={searchTerm} onChange={handleSearch} /></div>
          <div className="icon">
            <img src={search} alt="Search" onClick={getResult} />
          </div>
      </div>
      </div>      
      {!isEmpty(weatherData) ? <div>
      <div className='ten-days-temp'>
         <p className='date-range'>{new Intl.DateTimeFormat('en-US', getMonth).format(date)} {date.getDate()} - {date.getDate() + 7} {date.getFullYear()}</p>
         <span className='average-temperature'>{Math.round(weatherData.main.temp)}<span className='celsius'>&#8451;</span></span>
        </div>
       
        <div className="seven-days">
        {!isEmpty(sevenDaysData) && sevenDaysData.daily.map((d,i) => {
          if (i + 1 !== sevenDaysData.daily.length) {
            return (
              <div className="seven-days-card">
                <img
                  src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
                  alt={d.weather[0].main}
                />
                <span className='card-day'>{new Date(d.dt*1000).toLocaleString('en-us', {weekday:'long'})}</span>
                <span className='card-temperature'>{Math.round(d.temp.day)} &#8451;</span>
              </div>        
            )
          }
        })}
        </div>
      </div> : null }
      {/* {/* <h2>{weatherData.main.temp}</h2> */}
    </div>
  );
}

export default LandingPage;

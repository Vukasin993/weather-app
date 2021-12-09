import React, { useState} from 'react';
import './landing-page.scss';
import Input from '../../components/input/index';
import Select from 'react-select'
import search from '../../assets/images/search.svg';

const API_KEY = '4e308dad5b0ffc36440e738859db44c6';

const LandingPage = () => {
const [searchTerm, setSearchTerm] = useState('');
const [weatherData, setWeatherData] = useState([]);
// const [city, setCity] = useState('');
const [cityName, setCityName] = useState('');
const [stateCode, setStateCode] = useState('');
const [cnt, setCnt] = useState(10);
// const API_KEY = '4e308dad5b0ffc36440e738859db44c6';


const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode}&cnt=${cnt}&appid=${API_KEY}`).then(
            response => response.json()
        ).then(
            data => {
                setWeatherData(data);
            }
        )
}

console.log("WEATHER DATA++", weatherData)

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setCityName(e.target.value);
  };

  const options = [
    { value: 'NL', label: 'NL' },
    { value: 'US', label: 'US' },
    { value: 'GB', label: 'GB' }
  ]

  const [selectedOption, setSelectedOption] = useState(options[0].value);


  const getResult = () => {
    if (stateCode !== '' && cityName !== '') {
        getWeather();
    }
  }

  const handleChange = (e) => {
      console.log("E",e)
    setStateCode(e.value);
  }

  console.log("STATEA CODE", stateCode)

  return (
    <div className="wrapper">
      <div className="search">
        <div className="left">
        <div className="icon">
            <img src={search} alt="Search" />
          </div>
          <div className="select">
            <Select options={options} value={options.find(el => el.value === selectedOption)} onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div className="right">
          <div className="input"><Input placeholder="Search" value={searchTerm} onChange={handleSearch} /></div>
          <div className="icon">
            <img src={search} alt="Search" onClick={getResult} />
          </div>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;

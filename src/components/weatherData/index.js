import React from 'react';
import { isEmpty } from '../../utils/constants';
import './weatherData.scss';

const WeatherData = ({ weatherData, sevenDaysData }) => {
  const date = new Date();
  const getMonth = { month: 'long' };

  return (
    <div className='weather-data-wrapper'>
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
                  <img src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`} alt={d.weather[0].main} />
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
};

export default WeatherData;
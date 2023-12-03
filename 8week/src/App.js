import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
const API_KEY = '4bedcfe581609d3755e51864d9d5fca4'; // 발급받은 API 키를 입력해주세요

function App() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchData = async (e) => {
    e.preventDefault(); // 페이지 리로딩을 방지합니다.
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=imperial`);
      setWeather({
        city: response.data.name,
        temperature: convertFahrenheitToCelsius(response.data.main.temp),
        condition: response.data.weather[0].main
      });
      setInput(''); // 입력 필드를 비웁니다.
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const convertFahrenheitToCelsius = (temp) => {
    return ((temp - 32) * 5/9).toFixed(2);
  }

  return (
    <div>
      <form onSubmit={fetchData}>
        <input 
          type='text' 
          value={input} 
          onChange={(e)=>setInput(e.target.value)} 
          placeholder='도시를 입력하세요'
        />
      </form>
      {weather && 
      <div className='weather-info'>
        <p className='city'>{weather.city}</p>
        <p className='temperature'>{weather.temperature}℃</p>
        <p className='condition'>{weather.condition}</p>
    </div>
}
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Delhi'); 
  const [country, setCountry] = useState('in'); 
  const fetchWeatherData = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
      );
      console.log(response)
      setWeatherData(response)
      console.log(response.data.main)

    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  


  return (
    <div>
      <Header/>
      <img 
        className=' fixed w-screen -z-10 h-screen md:h-full'
        src='https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600'
         alt='bg-image'/>
      <div className=' pl-3 sm:flex-col'>
        
      <h2 className=" sm:flex-col md:flex text-2xl font-semibold  mt-5 text-white ">Weather Information</h2>
    <div className="flex flex-col sm:flex-row">
      <div className="flex items-center mb-2 sm:mb-0">
      <label className=' text-3xl md:text-xl text-white'>City: </label>
      <input className=" m-2 mr-4 py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter city name" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div className="flex items-center" >
       <label className=' text-3xl md:text-xl text-white'>Country:</label>   
       <input type="text" className=" m-2 py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter country name" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      </div>
      <button className=' bg-purple-500 text-black p-2 m-2 rounded-lg ' onClick={fetchWeatherData}>Submit</button>
      
      {weatherData &&
        <div>
          <p className="text-3xl md:text-lg mt-2 mb-4 md:mb-2 font-bold text-white md:text-black">Feels Like: {weatherData.data.main.feels_like}K</p>
          <p className="text-3xl md:text-lg mb-4 md:mb-2 font-bold text-white md:text-black ">Temperature: {weatherData.data.main.temp}K</p>
          <p className="text-3xl md:text-lg mb-4 md:mb-2 font-bold text-white md:text-black">Humidity: {weatherData.data.main.humidity}%</p>
          <p className="text-3xl md:text-lg mb-4 md:mb-2 font-bold text-white md:text-black">temp_max: {weatherData.data.main.temp_max}K</p>
          <p className="text-3xl md:text-lg mb-4 md:mb-2 font-bold text-white md:text-black">temp_min: {weatherData.data.main.temp_min}K</p>
          <p className="text-3xl md:text-lg mb-4 md:mb-2 font-bold text-white md:text-black">pressure: {weatherData.data.main.pressure}hPa</p>
          <p className="text-3xl md:text-lg mb-4 md:mb-2 font-bold text-white md:text-black">wind speed: {weatherData.data.wind.speed}m/s</p>
        </div>
     }
      </div>
    </div>
  );
    
  
}

export default App
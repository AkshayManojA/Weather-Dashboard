import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import WeatherData from './WeatherData'
import LoadingSpinner from './LoadingSpinner'



const Dashboard = () => {
    const [darkMode,setDarkMode] = useState(false)
    const [city,setCity] = useState('')
    const [weatherData,setWeatherData] = useState(null)
    const [loading,setloading] = useState(false)
    const [error,setError]=useState('')
    const apiKey = 'befd984de4d3c050671d4eb935e6c660';

    const fetchWeatherData = async ()=>{
        //api call
        if(!city)return;
        setloading(true)
        setError('')
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
              );
              setWeatherData(response.data)
        } catch (error) {
            setError('Failed to fetch weather data')
            setWeatherData(null)
        }
        finally{
            setloading(false)
        }
    }

    const handleModeToggle = ()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('dark-mode')
        }
        else{
            document.body.classList.remove('dark-mode')
        }
        //cleanup code
        return()=>{
            document.body.classList.remove('dark-mode')
        }

    },[darkMode])

  return (
    <div className={`dashboard ${darkMode? 'dark-mode':''}`}>
        <div className="container weather-card">
            <h1>Weather Dashboard</h1>
            <div className="input-group mb-4">
                <input 
                type="text"
                className='form control'
                placeholder='Enter city Name'
                value={city} 
                onChange={(e)=>setCity(e.target.value)}
                />
                
                <button id="searchbtn" className='btn btn-primary' onClick={fetchWeatherData}>Get weather</button>
                <button className='btn btn-primary' onClick={handleModeToggle}>{darkMode?'Light Mode':'Dark Mode'}</button>
            

                

            </div>
           
            
        </div>

        {loading && <LoadingSpinner />}
        {error && <div className='error-message'>{error}</div>}
        {weatherData && !loading && <WeatherData data={weatherData} />}


    </div>
  )
}

export default Dashboard
import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
const WeatherRealtime = () => {

    let [weatherData,setWeatherData] = useState(null)

    // get weather data
    const getWeatherRespond = async()=>{
        let data = await axios.get('https://api.weatherapi.com/v1/current.json?key=70c953808d684380b55151112220108&q=tainan&aqi=no').then((res)=>{
            return res.data
            
        }).catch((err)=>{
            console.log(err)
        })

        setWeatherData(item => item = data)
        console.log(weatherData)
    }
    // call weather api
    useEffect(()=>{
        getWeatherRespond()
    },[])

    return (
        <WeatherTopListMenu>
            {
                weatherData ? 
                <> 
                    <WeatherPng src={require("../../assets/night/15.png")}/>
                    <WeatherTemp>29°C</WeatherTemp>
                    <WeatherLocation>臺北市</WeatherLocation>
                </>  : "null"
            }
           
        </WeatherTopListMenu>
    )
}
// weather

const WeatherTopListMenu = styled.div`
    display: flex;
    align-items: center;
`
const WeatherPng = styled.img`
    flex: 1;
    max-width: 47px;
`
const WeatherTemp = styled.div`
    flex: 1;
    font-size: 0.6rem;
    font-weight: 700;
    margin: 0 3px 0 6px;

`
const WeatherLocation = styled.div`
    flex: 2;
    font-size: 0.6rem;
    font-weight: 700;
   
`
export default WeatherRealtime
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp()
{
    let[weatherInfo,setWeatherInfo] = useState({
        city:"wonderland",
        feelsLike : 24.84,
        temp:25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Antara</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}
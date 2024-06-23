
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "735f365170d7276e8f66d5df4096b5d6";

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
               city:city,
               temp:jsonResponse.main.temp,
               tempMin : jsonResponse.main.temp_min,
               tempMax : jsonResponse.main.temp_max,
               humidity:jsonResponse.main.humidity,
               feelsLike:jsonResponse.main.feels_like,
               weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(error) {
           throw error;
        }
    }


    let handleChange = (event)=>{
        setCity(event.target.value);
    };
    let handleSbmit = async(event)=>{
        try{
            event.preventDefault();
            setCity("");
            console.log(city);
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    };
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSbmit}>
            <TextField id="city" 
            label="City Name" 
            variant="outlined"
             required
             onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">SEARCH</Button>
            {error && <p style={{color:red}}>No such a place exixt!</p>}
            </form>

        </div>
    )
}


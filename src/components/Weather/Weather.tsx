import {useWeather} from "../../api/api";
import * as React from "react";
import {useAppSelector} from "../../redux/hooks";
import * as s from "./Weather.styles";

const Weather = () => {
    const { lat, lon } = useAppSelector((state) => state.location)

    const {data} = useWeather(lat, lon)

    return (
        <s.Wrapper>
            <s.Name>{!data ? 'Loading...' : data.name}</s.Name>
            <s.Temperature>{!data ? 'Loading...' : Math. round(data.main.temp)}
                <sup>&deg;C</sup>
            </s.Temperature>
            <img src={`https://openweathermap.org/img/wn/${data?.weather.map((item) => item.icon)}@2x.png`}/>
            <p>{!data ? 'Loading...' : data.weather.map((item) => item.main)}</p>
        </s.Wrapper>
    )
}

export default Weather;
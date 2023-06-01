import {useWeather} from "../../api/api";
import * as React from "react";
import {useAppSelector} from "../../redux/hooks";
import { Name, Temperature, Wrapper, Details } from "./Weather.styles";
import {useMemo} from "react";

const Weather = () => {
    const { lat, lon, name, state, country } = useAppSelector((state) => state.location)

    const {data} = useWeather(lat, lon)

    const weatherImageSrc = useMemo(() => {
        if (data && data.weather.length) {
            return `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }

        return ""
    }, [data])

    const locationDetails = useMemo(() => {
        return [state, country].filter((v) => v && v.length).join(", ")
    }, [state, country])

    return (
        <Wrapper>
            <Name>{name}</Name>
            <Details>{locationDetails}</Details>
            <Temperature>{!data ? "Loading..." : Math.round(data.main.temp)}
                <sup>&deg;C</sup>
            </Temperature>
            <img src={weatherImageSrc} alt="weather"/>
            <p>{!data ? "Loading..." : data.weather.map((item) => item.main)}</p>
        </Wrapper>
    )
}

export default Weather;
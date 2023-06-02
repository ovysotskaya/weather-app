import React, {useEffect, useMemo, useState} from "react";
import {useWeather} from "../../api/api";
import {useAppSelector} from "../../redux/hooks";
import { Name, Temperature, Wrapper, Details } from "./Weather.styles";


const Weather = () => {
    const { lat, lon, name, state, country } = useAppSelector((state) => state.location)
    const [updatedAt, setUpdatedAt] = useState(+new Date())

    const {data} = useWeather(lat, lon, updatedAt)

    const [dataCopy, setDataCopy] = useState(data)

    useEffect(() => {
        const weatherUpdateInterval = setInterval(() => {
            setUpdatedAt(+new Date())
        }, 30000)

        return () => {
            clearInterval(weatherUpdateInterval);
        }
    })

    useEffect(() => {
        if (data) setDataCopy(data)
    }, [data])

    const weatherImageSrc = useMemo(() => {
        if (dataCopy && dataCopy.weather.length) {
            return `https://openweathermap.org/img/wn/${dataCopy.weather[0].icon}@2x.png`
        }

        return ""
    }, [dataCopy])

    const locationDetails = useMemo(() => {
        return [state, country].filter((v) => v).join(", ")
    }, [state, country])

    return (
        <Wrapper>
            <Name>{name}</Name>
            <Details>{locationDetails}</Details>
            <Temperature>{!dataCopy ? "Loading..." : Math.round(dataCopy.main.temp)}
                <sup>&deg;C</sup>
            </Temperature>
            <img src={weatherImageSrc} alt="weather"/>
            <p>{!dataCopy ? "Loading..." : dataCopy.weather[0].main}</p>
        </Wrapper>
    )
}

export default Weather;

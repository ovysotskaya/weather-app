import React from "react";
import Weather from "../components/Weather/Weather";
import { useAppSelector } from "../redux/hooks";
import Search from "../components/Search/Search";
import {Wrapper, Header} from "./WeatherPage.styles";
import Checkbox from "../components/Checkbox/Checkbox";

const WeatherPage = () => {
    const isLocationEmpty = useAppSelector((state) => state.location.empty)

    return (
        <Wrapper>
            <Checkbox />
            <Header>Weather App</Header>
            <Search />
            {!isLocationEmpty ? <Weather/> : null}
        </Wrapper>
    );
}

export default WeatherPage;

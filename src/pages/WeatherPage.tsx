import * as React from 'react';

import Weather from "../components/Weather/Weather";
import { useAppSelector } from "../redux/hooks";
import Search from "../components/Search/Search";
import * as s from "./WeatherPage.styles";
import Checkbox from "../components/Checkbox/Checkbox";

const WeatherPage = () => {
    const isLocationEmpty = useAppSelector((state) => state.location.empty)

    return (
        <s.Wrapper>
            <Checkbox />
            <s.Header>Weather App</s.Header>
            <Search />
            {!isLocationEmpty ? <Weather/> : null}
        </s.Wrapper>
    );
}

export default WeatherPage;

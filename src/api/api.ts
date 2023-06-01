import {useQuery} from "react-query";

export function useLocations(query: string) {
    return useQuery(['locations', query], () => {
            if (query.length > 2) {
                return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=e0c7bd40251ff403da5ba03cefac5d73`)
                    .then((r) => r.json())
            }

            return [];
        }
    )
}

type Weather = {
    weather: {
        main: string
        icon: string
    }[]
    main: {
        temp: number
        temp_min: number
        temp_max: number
    }
    name: string
}

export function useWeather(lat: number | undefined, lon: number | undefined) {
    return useQuery(['weather', lat, lon], (): Promise<Weather> =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e0c7bd40251ff403da5ba03cefac5d73&units=metric`)
            .then((r) => r.json() as Promise<Weather>)
    )
}
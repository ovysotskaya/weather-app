import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../redux/hooks";
import {useLocations} from "../../api/api";
import {Location, setEmpty, setLocation} from "../../redux/locationSlice";

type GeoLocation = {
    name: string
    country: string,
    state: string,
} & Location

const Search = () => {
    const [value, setValue] = useState<GeoLocation | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<GeoLocation[]>([]);

    const dispatch = useAppDispatch()

    const {data} = useLocations(inputValue);

    useEffect(() => {
        if (data) setOptions(data)
    }, [data])

    useEffect(() => {
        dispatch(value ? setLocation(value) : setEmpty())
    }, [value, dispatch])

    return (
        <>
            <Autocomplete
                getOptionLabel={(option) => option.name}
                options={options}
                value={value}
                noOptionsText="No locations"
                onChange={(event: any, newValue: GeoLocation | null) => {
                    setValue(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                fullWidth sx={{maxWidth: 600}}
                renderInput={(params) => (
                    <TextField {...params} label="Add a location" fullWidth inputProps={{
                        ...params.inputProps,
                        "data-testid": "geosearch",
                    }}/>
                )}
                renderOption={(props, option) => (
                    <li {...props} key={`${option.name}_${option.lat}_${option.lon}`}>
                        {option.name}, {option.state}, {option.country}
                    </li>
                )}
            />
        </>

    )
}

export default Search;
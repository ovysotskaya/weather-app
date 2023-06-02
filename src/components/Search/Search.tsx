import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../redux/hooks";
import {useLocations} from "../../api/api";
import {GeoLocation, setEmpty, setLocation} from "../../redux/locationSlice";

const Search = () => {
    const [value, setValue] = useState<GeoLocation | null>(null);
    const [inputValue, setInputValue] = useState("");
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
                filterOptions={(x) => x}
                onChange={(event: any, newValue: GeoLocation | null) => {
                    setValue(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                fullWidth
                sx={{maxWidth: 600}}
                isOptionEqualToValue={(option, value) => {
                    return option.name === value.name && option.lat === value.lat && option.lon === value.lon
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Add a location" fullWidth inputProps={{
                        ...params.inputProps,
                        "data-testid": "geosearch",
                    }}/>
                )}
                renderOption={(props, {name, lat, lon, state, country}) => (
                    <li {...props} key={`${name}_${lat}_${lon}`}>
                        {[name, state, country].filter((v) => v).join(", ")}
                    </li>
                )}
            />
        </>

    )
}

export default Search;
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type GeoLocation = {
    name: string
    state: string,
    country: string,
    lat: number,
    lon: number,
}

export const locationSlice = createSlice({
    name: "location",
    initialState: {
        lat: 0,
        lon: 0,
        name: "",
        state: "",
        country: "",
        empty: true
    },
    reducers: {
        setLocation: (state, action: PayloadAction<GeoLocation>) => {
            return {...action.payload, empty: false}
        },
        setEmpty: (state) => {
            return {...state, empty: true}
        }
    },
})

export const { setLocation, setEmpty } = locationSlice.actions

export default locationSlice.reducer
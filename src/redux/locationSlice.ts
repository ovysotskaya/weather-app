import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type Location = {
    lat: number
    lon: number
}

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        lat: 0,
        lon: 0,
        empty: true
    },
    reducers: {
        setLocation: (state, action: PayloadAction<Location>) => {
            return {...action.payload, empty: false}
        },
        setEmpty: (state) => {
            return {...state, empty: true}
        }
    },
})

export const { setLocation, setEmpty } = locationSlice.actions

export default locationSlice.reducer
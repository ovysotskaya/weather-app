import * as React from "react";
import Switch from "@mui/material/Switch";
import {useAppDispatch} from "../../redux/hooks";
import {toggle} from "../../redux/themeSlice";

const Checkbox = () => {
    const dispatch = useAppDispatch();

    return <Switch
        onChange={() => {dispatch(toggle())}}
        inputProps={{ "aria-label": "controlled" }}
    />
}

export default Checkbox;
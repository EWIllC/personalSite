import axios from "axios"

const SET_PROPERTIES = "SET_PROPERTIES";

export const setProperties = (properties) => {
    return { type: SET_PROPERTIES, properties };
}

export const fetchProperties = () => {
    return async (dispatch) => {
        const { data } = await axios.get("/api/properties");
        dispatch(setProperties(data));
    }
}

export default function propertiesReducer (state = [], action) {
    switch(action.type) {
        case SET_PROPERTIES:
            return action.properties;

        default:
            return state;
    }
}
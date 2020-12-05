import { combineReducers } from "redux";
const counter = (state = {}, { type, name } = {}) => {
    if (type === "INCREMENT")
        return { ...state, [name]: (state[name] || 0) + 1 };
    if (type === "DECREMENT")
        return { ...state, [name]: (state[name] || 0) - 1 };
    return state;
};
export default combineReducers({ counter });

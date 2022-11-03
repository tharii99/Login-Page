import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { loginReducer } from "./counter/Reducer";

const reducer = combineReducers({
    loginReducer
})

export const store = configureStore({
    reducer,
})
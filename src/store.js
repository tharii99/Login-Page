import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { loginReducer } from "./counter/Reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const rootReducer = combineReducers({loginReducer:loginReducer})

const store = configureStore({
    reducer: rootReducer,
    middleware
  });
  sagaMiddleware.run(mySaga);

export default store;
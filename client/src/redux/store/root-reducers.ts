import {combineReducers} from "@reduxjs/toolkit";
import store from './store'

import {LoginSlice} from "../../pages/login/login.reducer";

const rootReducer = combineReducers({
    login: LoginSlice.reducer
});
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default rootReducer;
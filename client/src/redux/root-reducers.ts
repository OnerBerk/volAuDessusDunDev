import {combineReducers} from "@reduxjs/toolkit";
import store from './store/store'

import {LoginSlice} from "../component/login-form/login.reducer";
import {SignupSlice} from "../component/registration-form/registration.reducers";
import {SocialResponseSlice} from "../component/login-form/social-login.reducer";

const rootReducer = combineReducers({
    socialResponse:SocialResponseSlice.reducer,
    login: LoginSlice.reducer,
    signup:SignupSlice.reducer
});
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default rootReducer;
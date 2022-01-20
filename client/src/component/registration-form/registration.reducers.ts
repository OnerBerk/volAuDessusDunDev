import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AuthServices from "../../api-callback/services/auth/auth.request";
import {logIn} from "../login-form/login.reducer";

export type SignUpState = {
    isLoading: boolean;
    payload: any;
}

const initialState: SignUpState = {
    isLoading: false,
    payload: {}
}

export const signUp = createAsyncThunk(
    'Signup',
    async ({lastname, firstname, email, password}: any,) => {
        const response = await AuthServices.signUp(lastname, firstname, email, password)
        return response
    })

export const SignupSlice = createSlice({
    name: "registrationSlice",
    initialState,
    reducers: {
        resetSignupState: (state) => {
            state = initialState
            return state
        }
    },
    extraReducers: (builder => {
        builder.addCase(logIn.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(logIn.fulfilled, (state, {payload}) => {
console.log("fulfilled",payload)
            state = {payload, isLoading: false};
            return state;
        });
        builder.addCase(logIn.rejected, (state, errors) => {
            console.log(state)
            state.isLoading = false;
        });
    })
})

export const {resetSignupState} = SignupSlice.actions
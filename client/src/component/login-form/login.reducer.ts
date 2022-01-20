import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AuthServices from "../../api-callback/services/auth/auth.request";

export type LoginState = {
    isLoading: boolean;
    payload: any;
}

const initialState: LoginState = {
    isLoading: false,
    payload: {}
}

export const logIn = createAsyncThunk(
    'login',
    async ({email,password}:any, thunkAPI) => {
    const response = await AuthServices.loginUser(email,password);
    return response;
});

export const LoginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        resetLoginState: (state) => {
            state = initialState
            return state
        }
    },
    extraReducers:(builder => {
        builder.addCase(logIn.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(logIn.fulfilled, (state, { payload }) => {
            state = { payload, isLoading: false };
            return state;
        });
        builder.addCase(logIn.rejected, (state, errors) => {
            state.isLoading = false;
        });
    })
})

export const {resetLoginState}=LoginSlice.actions
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import SocialSigninResponseServices from "../../api-callback/services/auth/social_signin_res.request";


export type SocialLoginState = {
    isLoading: boolean;
    payload: any;
}

const initialState: SocialLoginState = {
    isLoading: false,
    payload: {}
}

export const socialResponse = createAsyncThunk(
    'succes reponse',
    async ( thunkAPI) => {
        const response = await SocialSigninResponseServices.successResponse();
        return response;
    });

export const SocialResponseSlice = createSlice({
    name: "socialResponseSlice",
    initialState,
    reducers: {
        resetSocialState: (state) => {
            state = initialState
            return state
        }
    },
    extraReducers: (builder => {
        builder.addCase(socialResponse.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(socialResponse.fulfilled, (state, {payload}) => {
            console.log(payload, state)
            state={
                payload:payload,
                isLoading:false
            }
            return state
        });
        builder.addCase(socialResponse.rejected, (state, errors) => {
            state.isLoading = false;
        });
    })
})

export const {resetSocialState} = SocialResponseSlice.actions
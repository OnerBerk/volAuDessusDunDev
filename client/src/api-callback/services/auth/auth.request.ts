import apiClient from "../../api-client/api-client";
import {SIGIN, SIGNUP} from "../../endpoints/endpoints";

const AuthServices = {
    loginUser: async (email: string, password: string) => apiClient(
        {
            route: SIGIN,
            data: {email: email, password: password},
            params: undefined,
            method: "POST"
        }),
    signUp:async (
        lastname:string,
        firstname:string,
        email:string,
        password:string)=>apiClient({
        route:SIGNUP,
        data :{
            lastname:lastname,
            firstname:firstname,
            email:email,
            password:password
        },
        params:undefined,
        method:'POST'

    })
}

export default AuthServices
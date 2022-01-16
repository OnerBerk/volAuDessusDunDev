import apiClient from "../../api-client/api-client";
import {LOGIN} from "../../endpoints/endpoints";

const AuthServices = {
    loginUser: async (email: string, password: string) => apiClient(
        {
            route: LOGIN,
            data: {email: email, password: password},
            params: undefined,
            method: "POST"
        })
}

export default AuthServices
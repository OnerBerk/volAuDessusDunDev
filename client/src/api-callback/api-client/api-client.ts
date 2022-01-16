import axios from "axios";
import {BASE_API} from "../endpoints/endpoints";
import {Irequest} from "../../domain/domain";

const ApiClient = () => {
    const {REACT_API_URL = BASE_API} = process.env
    const axiosInstance = axios.create({
        baseURL: REACT_API_URL,
        responseType: 'json'
    })
    return axiosInstance
}

const apiRequest = async ({route, data, params, method}: Irequest) => {
    const authToken = localStorage.getItem('userToken');
    const client = ApiClient();
    try {
        const req = await client({
            url: route,
            method,
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
            },
            data: {...data},
            params: {...params},
        })
        return req.data
    } catch (err:any) {
        console.log(err.response.data)
        return err.response.data.message
    }
}


export default apiRequest
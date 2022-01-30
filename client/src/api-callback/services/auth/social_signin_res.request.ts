import apiClient from "../../api-client/api-client";
import {SOCIAL_LOGOUT, SOCIAL_SIGIN_FAILED, SOCIAL_SIGIN_SUCCESS} from "../../endpoints/endpoints";

const SocialSigninResponseServices = {
    successResponse:async ()=>apiClient({
        route: SOCIAL_SIGIN_SUCCESS,
        data: {},
        params: undefined,
        method: "GET"
    }),
    failedResponse:async ()=>apiClient({
        route: SOCIAL_SIGIN_FAILED,
        data: {},
        params: undefined,
        method: "GET"
    }),
    logout:async ()=>apiClient({
        route: SOCIAL_LOGOUT,
        data: {},
        params: undefined,
        method: "GET"
    }),
}

export default SocialSigninResponseServices
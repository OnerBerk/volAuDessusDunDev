import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Rootstate} from "../../redux/root-reducers";
import {useEffect} from "react";
import {LoginState} from "../../component/login-form/login.reducer";
import AuthRegistration from "../../pages/auth-registartion/auth-registration";
import {SocialLoginState, socialResponse} from "../../component/login-form/social-login.reducer";

type ProtectedRouteProps = {
    component: any
    path?: string
}

const ProtectedRoute = ({path, component: RouteComponent}: ProtectedRouteProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginContent = useSelector<Rootstate, LoginState>((state) => state.login);
    const socialContent = useSelector<Rootstate, SocialLoginState>((state) => state.socialResponse);

    useEffect(() => {dispatch(socialResponse())}, [])

    const isLogged = () => {
        const socialToken = socialContent.payload.user && socialContent.payload.user.accessToken
        const loginToken = loginContent.payload && loginContent.payload
        const token = localStorage.getItem('userToken')

        if (socialToken || loginToken.token || token) {
            return <RouteComponent/>
        } else {
            navigate("/login")
            return <AuthRegistration/>
        }
    }

    useEffect(() => {
        isLogged()
    }, [socialContent])
    useEffect(() => {
        isLogged()
    }, [loginContent])

    return isLogged()
}
export default ProtectedRoute;
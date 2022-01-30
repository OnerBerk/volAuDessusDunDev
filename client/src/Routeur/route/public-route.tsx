import {Navigate, useNavigate} from "react-router-dom";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Rootstate} from "../../redux/root-reducers";
import {LoginState} from "../../component/login-form/login.reducer";
import {useEffect, useState} from "react";
import {SocialLoginState, socialResponse} from "../../component/login-form/social-login.reducer";
import AuthRegistration from "../../pages/auth-registartion/auth-registration";

type PublicRouteProps = {
    component: any
}

const PublicRoute = ({component: RouteComponent}: PublicRouteProps) => {
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
            navigate("/")
            return <RouteComponent/>

        } else {
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
export default PublicRoute
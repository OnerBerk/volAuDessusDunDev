import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import SocialNetworkFlag from "../../ui-components/social-network-flag/social-network-flag";
import {SocialLoginState, socialResponse} from "../login-form/social-login.reducer";
import {Rootstate} from "../../redux/root-reducers";

import facebookLogo from "../../asset/facebook .png";
import googleLogo from "../../asset/google.png"
import githubLogo from "../../asset/github.png"
import "./social-signIn.scss"


const SocialSignin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {payload} = useSelector<Rootstate, SocialLoginState>(state => state.socialResponse)
    useEffect(() => {
        dispatch(socialResponse())
    }, [])
    useEffect(() => {
        if (payload.user) {
            localStorage.setItem('userToken', payload.user.accessToken)
            localStorage.setItem('socialUser', JSON.stringify({
                lastname: payload.user.lastname,
                firstname: payload.user.firstname,
                email: payload.user.email
            }))
            navigate('/')
        }

    }, [payload])

    const google = async () => {
        await window.open("http://localhost:8080/api/v1/auth/google", "_self",)
    }
    const facebook = async () => {
        await window.open("http://localhost:8080/api/v1/auth/facebook", "_self",)
    }
    const github = async () => {
        await window.open("http://localhost:8080/api/v1/auth/github", "_blank",)
    }

    return (
        <div className="social-signin-main">
            <SocialNetworkFlag onClick={facebook} color="#358bb0" logo={facebookLogo} networkName="Facebook"/>
            <SocialNetworkFlag onClick={google} color="#de1818" logo={googleLogo} networkName="Google"/>
            <SocialNetworkFlag onClick={github} color="#443D3DFF" logo={githubLogo} networkName="GitHub"/>
        </div>
    )
}
export default SocialSignin
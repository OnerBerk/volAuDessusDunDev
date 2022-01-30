import {useNavigate} from "react-router-dom";
import face from "../../asset/facebook .png";
import googleLogo from "../../asset/google.png"
import "./social-signIn.scss"
import SocialNetworkFlag from "../../ui-components/social-network-flag/social-network-flag";
import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SocialLoginState, socialResponse} from "../login-form/social-login.reducer";
import {Rootstate} from "../../redux/root-reducers";
import layout from "../../ui-components/layout/simple-layout/layout";


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

    const facebook = () => {
        let timer: NodeJS.Timeout | null = null
        const newWindow = window.open("http://localhost:8080/api/v1/auth/facebook", "_blank", "width=500,height=600")
        if (newWindow) {
            timer = setInterval(() => {
                if (newWindow.closed) {
                    console.log("next step")
                }
                if (timer) clearInterval(timer)
            }, 500)
        }
    }
    return (
        <div className="social-signin-main">
            <SocialNetworkFlag onClick={facebook} color="#358bb0" logo={face} networkName="Facebook"/>
            <SocialNetworkFlag onClick={google} color="#de1818" logo={googleLogo} networkName="Google"/>
        </div>
    )
}
export default SocialSignin
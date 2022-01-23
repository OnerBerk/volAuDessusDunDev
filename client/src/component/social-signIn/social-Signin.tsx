import {useNavigate} from "react-router-dom";
import face from "../../asset/facebook .png";
import googleLogo from "../../asset/google.png"
import "./social-signIn.scss"
import SocialNetworkFlag from "../../ui-components/social-network-flag/social-network-flag";
import axios from "axios";


const SocialSignin = () => {
    const navigate = useNavigate()
    const fetchUser = async () => {
        const response = await axios.get(
            'http://localhost:8080/api/v1//socialUser',
            {withCredentials: true})
            .catch((err) => {
                console.log("something went wrong", err)
            })
        if (response && response.data) {
            const user = response.data
            localStorage.setItem('user', JSON.stringify({user: user.profile, token: user.token}))
            navigate('/')
        }
    }

    fetchUser()


    const google = async () => {
        let timer: NodeJS.Timeout | null = null
        const newWindow = window.open("http://localhost:8080/api/v1/auth/google", "_self",)
        if (newWindow) {
            timer = setInterval(() => {
                if (newWindow.closed) {
                    console.log("next step")

                }
                if (timer) clearInterval(timer)
            }, 500)
        }
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
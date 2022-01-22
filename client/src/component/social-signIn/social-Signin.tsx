import face from "../../asset/facebook .png";
import google from "../../asset/google.png"
import "./social-signIn.scss"
import {useState} from "react";
import SocialNetworkFlag from "../../ui-components/social-network-flag/social-network-flag";

const SocialSignin = () => {
    const [network, setNetwork] = useState<string>("")
    return (
        <div className="social-signin-main">
            <SocialNetworkFlag logo={face} networkName="Facebook"/>
            <SocialNetworkFlag logo={google} networkName="Google"/>
        </div>
    )
}
export default SocialSignin
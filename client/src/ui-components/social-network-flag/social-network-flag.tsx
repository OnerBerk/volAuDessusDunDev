
import "./social-network-flag.scss"

type SocialNetworkFlagProps = {
    logo: string
    networkName: string
}

const SocialNetworkFlag = ({logo,networkName}: SocialNetworkFlagProps) => {

    return (
        <div className="social-net-flag-main" >
            <img
                alt="facebook signin logo"
                src={logo}/>
            <h1> Sign in with <span className={networkName === "Facebook" ? "facebook":"google"} >{networkName}</span> </h1>
        </div>
    )
}
export default SocialNetworkFlag
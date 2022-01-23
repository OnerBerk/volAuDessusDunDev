import "./social-network-flag.scss"

type SocialNetworkFlagProps = {
    logo: string
    networkName: string
    color: string
    onClick: () => void
}

const SocialNetworkFlag = ({logo, networkName, color, onClick}: SocialNetworkFlagProps) => {

    return (
        <div
            onClick={onClick}
            className="social-net-flag-main">
            <img
                alt="facebook signin logo"
                src={logo}/>
            <h1> Sign-in with <span style={{color: `${color}`}}>{networkName}</span></h1>
        </div>
    )
}
export default SocialNetworkFlag
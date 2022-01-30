import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetLoginState} from "../../component/login-form/login.reducer";
import disconnect from "../../asset/disconnect.png"
import "./header.scss"
import {resetSocialState, socialLogout} from "../../component/login-form/social-login.reducer";

type HeaderProps = {
    img: string
    children: React.ReactNode
    right?: boolean
}

const Header = ({img, children, right}: HeaderProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return (
        <div className="header-main"
             style={right ? {borderBottomStyle: "solid", borderBottomWidth: 2, borderBottomColor: "#AF9D9D7C"} : {}}>
            <div className="header-logo"><img width={50} height={50} alt="logo daruma" src={img}/></div>
            <div className="header-children"> {children}</div>
            <div className="header-right">{right ?
                <div
                    className="disconnect-container"
                    onClick={() => {
                        localStorage.removeItem('socialUser')
                        localStorage.removeItem('user')
                        localStorage.removeItem('userToken')
                        dispatch(socialLogout())
                        dispatch(resetLoginState())
                        dispatch(resetSocialState())
                        navigate("/login")
                    }}>
                    <img
                        alt="logo de deconnection"
                        src={disconnect}/>
                    Disconnect
                </div> : ""}
            </div>
        </div>
    )
}
export default Header
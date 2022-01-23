import {useEffect, useState} from "react";
import DoubleLayout from "../../ui-components/layout/double-layout/double-layout";
import HorizontalSplitLayout from "../../ui-components/layout/horizontal-split-layout/horizontal-split-layout";
import SideLogin from "../../ui-components/login-right/side-login";
import Header from "../../ui-components/header/header";
import logo from "../../asset/brain2.png"
import LoginForm from "../../component/login-form/login-form";
import RegistrationForm from "../../component/registration-form/registration-form";

const AuthRegistration = () => {
    const [sign, setSign] = useState(false)

    return (
        <DoubleLayout
            right={<SideLogin/>}
            left={
                <HorizontalSplitLayout
                    top={<Header img={logo} children="Vol au dessus d'un nid de dev"/>}
                    bottom={
                        <>
                            {
                                !sign
                                    ?
                                    <LoginForm sign={sign} setSign={setSign}/>
                                    :
                                    <RegistrationForm sign={sign} setSign={setSign}/>
                            }
                        </>
                    }
                />
            }
        />
    )
}
export default AuthRegistration

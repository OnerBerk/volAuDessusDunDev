import DoubleLayout from "../ui-components/layout/double-layout/double-layout";
import Form from "../ui-components/form/form";
import HorizontalSplitLayout from "../ui-components/layout/horizontal-split-layout/horizontal-split-layout";
import Textfield from "../ui-components/layout/textField/textfield";
import {useState} from "react";
import SideLogin from "../ui-components/login-right/side-login";
import Header from "../header/header";

import logo from "../asset/brain2.png"


const Login = () => {
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    return (
        <DoubleLayout
            right={<SideLogin/>}
            left={
                <HorizontalSplitLayout
                    top={<Header img={logo} children="Vol au dessus d'un nid de dev" />}
                    bottom={<Form inputArray={
                            [
                                <Textfield placeholder="Your email" value={email} setValue={setEmail} label="Email"/>,
                                <Textfield placeholder="Your password" value={password} setValue={setPassword} label="Password"/>,

                            ]
                        }
                        onSubmit={() => alert('submit')}/>}
                />
            }
        />
    )
}
export default Login
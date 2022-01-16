import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DoubleLayout from "../../ui-components/layout/double-layout/double-layout";
import Form from "../../ui-components/form/form";
import HorizontalSplitLayout from "../../ui-components/layout/horizontal-split-layout/horizontal-split-layout";
import Textfield from "../../ui-components/layout/textField/textfield";
import SideLogin from "../../ui-components/login-right/side-login";
import Header from "../../header/header";

import logo from "../../asset/brain2.png"
import {logIn, LoginState} from "./login.reducer";
import {Rootstate} from "../../redux/store/root-reducers";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const {payload} = useSelector<Rootstate, LoginState>((state) => state.login);
    const [email, setEmail] = useState<string>("")

    const [isEmailErr, setIsEmailErr] = useState(false);
    const [isEmailMsgErr, setIsEmailMsgErr] = useState('');


    const [isPwdErr, setIsPwdErr] = useState(false);
    const [isPwdMsgErr, setIsPwdMsgErr] = useState('');

    const [password, setPassword] = useState<string>("")



    const checkError = () => {
        if (email.length === 0 || password.length === 0) {
            if (email.length === 0) {
                setIsEmailErr(true)
                setIsEmailMsgErr("l'email doit être spécifié")
            }
            if (password.length === 0) {
                setIsPwdErr(true)
                setIsPwdMsgErr("le mot de passe doit être spécifié")
            }
            return false
        }
        return true

    }


    const handleSubmit = async () => {
        if (checkError()) {
            dispatch(logIn({email, password}));
            if (isPwdMsgErr.length === 0 ){
                navigate('/')
            }
        }
    }


    useEffect(() => {
        if (payload.err) {
            setIsPwdErr(true)
            setIsEmailErr(true)
            setIsPwdMsgErr(payload.err)
        } else {
            localStorage.setItem('user', JSON.stringify({userId: payload.userId, userToken: payload.token}))
        }
    }, [payload])


    return (
        <DoubleLayout
            right={<SideLogin/>}
            left={
                <HorizontalSplitLayout
                    top={<Header img={logo} children="Vol au dessus d'un nid de dev"/>}
                    bottom={
                        <Form onSubmit={handleSubmit}>
                            <Textfield
                                type="email"
                                label="Email"
                                isError={isEmailErr}
                                setIsError={setIsEmailErr}
                                errorMessage={isEmailMsgErr}
                                setIsErrorMessage={setIsEmailMsgErr}
                                value={email}
                                setValue={setEmail}/>
                            <Textfield
                                type="password"
                                label="Password"
                                isError={isPwdErr}
                                setIsError={setIsPwdErr}
                                errorMessage={isPwdMsgErr}
                                setIsErrorMessage={setIsPwdMsgErr}
                                value={password}
                                setValue={setPassword}/>
                        </Form>
                    }
                />
            }
        />
    )
}
export default Login
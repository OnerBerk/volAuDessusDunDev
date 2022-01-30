import React, {useEffect, useState} from "react";
import Textfield from "../../ui-components/layout/textField/textfield";
import Form from "../../ui-components/form/form";
import {useDispatch, useSelector} from "react-redux";
import {Rootstate} from "../../redux/root-reducers";
import {logIn, LoginState} from "./login.reducer";
import {useNavigate} from "react-router-dom";
import SocialSignin from "../social-signIn/social-Signin";

type LoginFormProps = {
    setSign: (sign: boolean) => void
    sign: boolean
}

const LoginForm = ({setSign, sign}: LoginFormProps) => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const {payload} = useSelector<Rootstate, LoginState>((state) => state.login);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [isEmailErr, setIsEmailErr] = useState(false);
    const [emailMsgErr, setEmailMsgErr] = useState('');


    const [isPwdErr, setIsPwdErr] = useState(false);
    const [pwdMsgErr, setPwdMsgErr] = useState('');


    const checkInputError = () => {
        if (email.length === 0 || password.length === 0) {
            if (email.length === 0) {
                setIsEmailErr(true)
                setEmailMsgErr("l'email doit être spécifié")
            }
            if (password.length === 0) {
                setIsPwdErr(true)
                setPwdMsgErr("le mot de passe doit être spécifié")
            }
            return false
        }
        return true
    }
    const checkServerError = () => {
        if (payload.err && payload.err.length > 0) {
            setIsPwdErr(true)
            setIsEmailErr(true)
            setPwdMsgErr(payload.err)
            return false
        } else {
            if (payload.token.length > 0) {
                localStorage.setItem('userToken', payload.token)
                localStorage.setItem('user', JSON.stringify({userId: payload.userId}))
                return true
            }else {
               return false
            }
        }
    }

    useEffect(() => {}, [pwdMsgErr])
    useEffect(() => {checkServerError() && navigate("/")}, [payload])


    const handleSubmit = async () => {
        if (checkInputError()) {
            dispatch(logIn({email, password}));
        }
    }
    return (
        <>
            <Form sign={sign} setSign={setSign} onSubmit={handleSubmit}>
                <Textfield
                    type="email"
                    label="Email"
                    isError={isEmailErr}
                    setIsError={setIsEmailErr}
                    errorMessage={emailMsgErr}
                    setIsErrorMessage={setEmailMsgErr}
                    value={email}
                    setValue={setEmail}/>
                <Textfield
                    type="password"
                    label="Password"
                    isError={isPwdErr}
                    setIsError={setIsPwdErr}
                    errorMessage={pwdMsgErr}
                    setIsErrorMessage={setPwdMsgErr}
                    value={password}
                    setValue={setPassword}/>
            </Form>
            <SocialSignin/>
        </>
    )
}

export default LoginForm
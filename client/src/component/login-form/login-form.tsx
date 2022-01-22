import React, {useEffect, useState} from "react";
import Textfield from "../../ui-components/layout/textField/textfield";
import Form from "../../ui-components/form/form";
import {useDispatch, useSelector} from "react-redux";
import {Rootstate} from "../../redux/root-reducers";
import {logIn, LoginState} from "./login.reducer";
import {useNavigate} from "react-router-dom";

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


    const checkError = () => {
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
    useEffect(()=>{},[pwdMsgErr])


    useEffect(() => {
        if (payload.err) {
            setIsPwdErr(true)
            setIsEmailErr(true)
            setPwdMsgErr(payload.err)
        } else {
            if (payload.token && payload.token.length > 0) {

                localStorage.setItem('user',
                    JSON.stringify(
                        {userId: payload.userId, userToken: payload.token})
                )
                navigate("/")
            } else {
            }
        }
    }, [payload])


    const handleSubmit = async () => {
        if (checkError()) {
            dispatch(logIn({email, password}));
        }
    }
    return (
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
    )
}

export default LoginForm
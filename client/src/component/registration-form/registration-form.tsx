import React, {useEffect, useState} from "react";
import Form from "../../ui-components/form/form";
import Textfield from "../../ui-components/layout/textField/textfield";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signUp, SignUpState} from "./registration.reducers";
import {Rootstate} from "../../redux/root-reducers";


type RegistrationFormProps = {
    setSign: (sign: boolean) => void
    sign: boolean
}

const RegistrationForm = ({setSign, sign}: RegistrationFormProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {payload} = useSelector<Rootstate, SignUpState>((state) => state.signup)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPwd, setConfirmPwd] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [firstname, setFirstname] = useState<string>("")

    const [isLastnameErr, setIsLastnameErr] = useState(false);
    const [lastnameMsgErr, setLastnameMsgErr] = useState('');

    const [isFirstnameErr, setIsFirstnameErr] = useState(false);
    const [firstnameMsgErr, setFirstnameMsgErr] = useState('');

    const [isEmailErr, setIsEmailErr] = useState(false);
    const [emailMsgErr, setEmailMsgErr] = useState('');

    const [isPwdErr, setIsPwdErr] = useState(false);
    const [pwdMsgErr, setPwdMsgErr] = useState('');

    const [isConfirmPwdErr, setIsConfirmPwdErr] = useState(false);
    const [confirmpwdMsgErr, setConfirmPwdMsgErr] = useState('');

    const checkError = () => {
        let emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

        if (
            lastname.length === 0 ||
            firstname.length === 0 ||
            email.length === 0 ||
            password.length === 0 ||
            confirmPwd.length === 0 ||
            password !== confirmPwd ||
            !emailRegex.test(email)
        ) {
            console.log(password !== confirmPwd)
            if (lastname.length === 0) {
                console.log("lastname")
                setIsLastnameErr(true)
                setLastnameMsgErr("Le nom doit être spécifié")
            }
            if (firstname.length === 0) {
                setIsFirstnameErr(true)
                setFirstnameMsgErr("Le prénom doit être spécifié")
            }
            if (email.length === 0) {
                setIsEmailErr(true)
                setEmailMsgErr("L'email doit être spécifié")
            }
            if (!emailRegex.test(email)) {
                setIsEmailErr(true);
                setEmailMsgErr('L\'email n\'est pas valide');
            }
            if (password.length === 0) {
                setIsPwdErr(true)
                setPwdMsgErr("Le mot de passe doit être spécifié")
            }
            if (confirmPwd.length === 0) {
                setIsConfirmPwdErr(true)
                setConfirmPwdMsgErr("La confirmation doit être spécifié")
            }
            if (password !== confirmPwd) {
                setIsConfirmPwdErr(true)
                setConfirmPwdMsgErr("Les mots de passe ne sont pas identiques ")
            }
            return false
        }
        return true
    }


    useEffect(() => {
    }, [payload])


    const handleSubmit = async () => {
        if (!checkError()) {
        } else {
            dispatch(signUp({lastname, firstname, email, password}))
        }
    }

    return (
        <div style={{marginTop:-30}}>
            <Form
                sign={sign}
                setSign={setSign}
                onSubmit={handleSubmit}>
                <Textfield
                    type="text"
                    label="Lastname"
                    value={lastname}
                    setValue={setLastname}
                    isError={isLastnameErr}
                    setIsError={setIsLastnameErr}
                    errorMessage={lastnameMsgErr}
                    setIsErrorMessage={setLastnameMsgErr}/>
                <Textfield
                    type="text"
                    label="Firstname"
                    value={firstname}
                    setValue={setFirstname}
                    isError={isFirstnameErr}
                    setIsError={setIsFirstnameErr}
                    errorMessage={firstnameMsgErr}
                    setIsErrorMessage={setFirstnameMsgErr}/>
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
                <Textfield
                    type="password"
                    label="Confirm-password"
                    isError={isConfirmPwdErr}
                    setIsError={setIsConfirmPwdErr}
                    errorMessage={confirmpwdMsgErr}
                    setIsErrorMessage={setConfirmPwdMsgErr}
                    value={confirmPwd}
                    setValue={setConfirmPwd}/>
            </Form>
        </div>

    )
}

export default RegistrationForm
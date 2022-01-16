import React from "react";
import UiButton from "../ui-button/ui-button";
import "./form.scss"

type FormProps = {
    children: React.ReactNode
    onSubmit: () => void
    setSign: (sign: boolean) => void
    sign: boolean

}

const Form = ({children, onSubmit, setSign, sign}: FormProps) => {
    return (
        <div className="form-main">
            {sign ? <h1>Sign-up</h1> : <h1>Sign-in</h1>}
            <form>
                {children}
                <UiButton onClick={onSubmit} type="button" label="Submit"/>
                <>
                    {
                        sign
                            ?
                            <div className="form-sign">Already have an account
                                <span onClick={() => setSign(false)}> {" Sign In "} </span>
                            </div>
                            :
                            <div className="form-sign">Don't have an account
                                <span onClick={() => setSign(true)}>{" Sign Up "}</span>
                            </div>
                    }
                </>
            </form>
        </div>

    )
}
export default Form
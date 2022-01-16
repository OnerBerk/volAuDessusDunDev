import React from "react";
import UiButton from "../ui-button/ui-button";
import "./form.scss"

type FormProps={
    children:React.ReactNode
    onSubmit:()=>void

}

const Form=({ children,onSubmit}:FormProps)=>{
return(
    <div className="form-main">
        <h1>Sign-in</h1>
        <form>
            {children}
            <UiButton onClick={onSubmit} type="button" label="Login"/>
        </form>
    </div>

)
}
export default Form
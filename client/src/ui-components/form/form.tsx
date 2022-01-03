import React from "react";
import UiButton from "../ui-button/ui-button";
import "./form.scss"

type FormProps={
    onSubmit:()=>void
    inputArray:React.ReactNode[]
}

const Form=({onSubmit, inputArray}:FormProps)=>{
return(
    <div className="form-main">
        <h1>Sign-in</h1>
        <form onSubmit={onSubmit}>
            {inputArray}
            <UiButton type="submit" label="Login"/>
        </form>
    </div>

)
}
export default Form
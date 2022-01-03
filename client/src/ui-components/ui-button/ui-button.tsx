import "./ui-button.scss"
type UiButtonprops={
    label:string
    type: "button" | "submit" | "reset" | undefined
}
const UiButton=({label,type}:UiButtonprops)=>{
    return(
        <div className="button-main">
            <button type={type}>{label}</button>
        </div>
    )
}

export default UiButton
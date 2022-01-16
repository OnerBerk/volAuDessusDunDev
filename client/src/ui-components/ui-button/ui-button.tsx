import "./ui-button.scss"

type UiButtonprops = {
    label: string
    type: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}
const UiButton = ({label, type, onClick}: UiButtonprops) => {
    return (
        <div className="button-main">
            <button onClick={onClick} type={type}>{label}</button>
        </div>
    )
}

export default UiButton
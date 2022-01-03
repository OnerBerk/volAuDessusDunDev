import "./textfield.scss"

type TextFieldProps = {
    value: string | number
    setValue: (e: any) => void
    label: string
    placeholder?:string
}

const Textfield = ({label, value, setValue,placeholder}: TextFieldProps) => {
    return (
        <div className="textfield-main">
            <label>{label}</label>
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}
export default Textfield
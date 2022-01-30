import "./textfield.scss"

type TextFieldProps = {
    type: string
    value: string | number
    setValue: (e: any) => void
    label: string
    placeholder?: string
    setIsError: (isError: boolean) => void
    isError: boolean
    errorMessage: string
    setIsErrorMessage: (errorMessage: string) => void
}


const Textfield = ({
                       type,
                       label,
                       value,
                       setValue,
                       placeholder,
                       isError,
                       setIsError,
                       errorMessage,
                       setIsErrorMessage
                   }: TextFieldProps) => {
    return (
        <div className="textfield-main">
            <label className={isError ? 'label-error' : ''}>
                {label}
            <input
                type={type}
                className={isError ? 'error' : ''}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                    setIsError(false)
                    setIsErrorMessage("")
                    setValue(e.target.value)
                }}
            />
            </label>
            {errorMessage ? <p className='errorMess'> {errorMessage}</p> : <p></p>}
        </div>
    )
}
export default Textfield
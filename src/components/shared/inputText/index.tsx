import { ChangeEventHandler } from "react"

interface IProps {
    name?: string
    value?: string | number | string[]
    onchange?: ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    className?: string
}

export const InputText = ({name, value, onchange, placeholder, className}: IProps) => {
    return(
        <input type="text" name={name} value={value} className={`bg-secondary w-full p-5 text-white placeholder:text-white/50 rounded-lg outline-none ${className}`} placeholder={placeholder} onChange={onchange}/>
    )
}
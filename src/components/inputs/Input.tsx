import { useState } from "react"

interface InputProps {
    id: string
    label: string
    value?: string
    type?: string
    disabled?: boolean
    required?: boolean
}

const Input: React.FC<InputProps> = ({id, label, value, type, disabled, required}) => {
    const [text, setText] = useState(value)
    return ( 
        <div className="w-full relative">
            <input id={id} type={type} value={text} disabled={disabled} required placeholder={type} onChange={(e)=> setText(e.target.value)}
            className={`peer w-full p-4 pt-5 placeholder-transparent font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
            `} />

            <label className={`absolute left-4 transition-all duration-200
            top-1 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:top-5`} >
                {label}
            </label>
        </div>
     );
}
 
export default Input;
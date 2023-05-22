import { useState } from "react";
import ListItem from "./ListItem";

interface SelectProps{
    id: string
    list: string[]
    text: string
    value?: string
    disabled: boolean
}

const Select:React.FC<SelectProps> = ({id, list, disabled, text, value}) => {

    const [selectedOption, setSelectedOption] = useState(value);

    return ( 
        <select id={id} disabled={disabled} className="w-full font-normal p-4 pr-10 placeholder-transparent bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed" value={selectedOption} name="select" onChange={e => setSelectedOption(e.target.value)}>
            <option value={text}>{text}</option>
            {list.map((item, index)=>(
                <ListItem key={index} text={item}  />
            ))}
        </select>
     );
}
 
export default Select;

// selected={item===value? true: false}
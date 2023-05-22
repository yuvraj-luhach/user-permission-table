import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    text?: string    
    // border?: string
    color?: string
    // bgColor?: string
    icon?: IconType
    classes?: string
    // align?: string
    // radius?: string
    onClick: () => void
}
// border, color, bgColor, align, radius,
const Button: React.FC<ButtonProps> = ({text , color, icon : Icon, classes, onClick}) => { 
  return (
    <button onClick={onClick} className={`${classes}`}>
        {Icon && (
            <Icon size={20} color={color} />
        )}
        {text!==undefined && text}
    </button>
);
}

export default Button
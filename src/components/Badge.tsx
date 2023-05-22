interface BadgeProps{
    text: string
    px?: string
    bg1?: string
    bg2?: string
    textColor?: string
}

const Badge:React.FC<BadgeProps> = ({text, px, bg1, bg2, textColor}) => {
    return (
        <div className={`flex py-2 ${px} items-center justify-center px-1 ${bg1} ${textColor} rounded-full`}>
            {bg2 && (
                <div className={`${bg2} left-2 rounded-full h-1.5 w-1.5`}></div>
            )}
            <div className="text-xs pl-1 font-medium">{text}</div>
        </div>
     );
}
 
export default Badge;

{/* <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <div className="bg-gray-500 rounded-full h-2 w-2"></div>
                    <span className="relative">{status}</span>
                </span> */}
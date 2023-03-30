import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = {
    value: string,
    classname?: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    // status: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement, HTMLButtonElement>>
}
const Button = ({value, classname}: ButtonProps) : JSX.Element => {
  return (
    <button 
      className={`cursor-pointer w-full font-semibold py-3 transition-all hover:bg-black rounded-md text-white bg-gray-800 ${classname}`}>
        {value}</button>
  )
}

Button.defaultProps = { value: "No Value", classname: "", status: false}
export default Button;

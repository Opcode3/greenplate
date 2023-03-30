import React from 'react'

type InputProps = {
    placeholder?: string,
    value?: string
    className?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, value, className}: InputProps): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <input 
        className={`${className} border border-prazzle-gray focus:border-prazzle-yellow bg-transparent focus:bg-white font-light text-base rounded-md py-3 px-4 outline-none transition-all`}
        placeholder={placeholder} value={value} />

    </div>
    )
}

Input.defaultProps = { value:"", placeholder: "", className:""}
export default Input;

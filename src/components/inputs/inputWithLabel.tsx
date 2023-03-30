import React from 'react'


type InputProps = {
    placeholder?: string,
    value?: string
    label?: string,
    type?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel = ({placeholder, value, label, type}: InputProps): JSX.Element => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={placeholder} className='text-prazzle-black font-semibold text-base mb-2 lg:text-xl'>{label}</label>
        <input 
            className='border border-prazzle-gray focus:border-prazzle-black bg-transparent focus:bg-white font-light text-base rounded py-3 px-4 outline-none transition-all'
            placeholder={placeholder} value={value} id={placeholder} type={type} />
    </div>
  )
}
InputWithLabel.defaultProps = { type: 'text'}
export default InputWithLabel
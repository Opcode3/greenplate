import React from 'react'


type InputProps = {
    placeholder?: string,
    value?: string
    label?: string,
    type?: string,
    required?: boolean
    onChange: (str: string) => void;
}

const InputWithLabel = ({placeholder, value, onChange, required, label, type}: InputProps): JSX.Element => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={label} className='text-r-black font-semibold text-base mb-2 lg:text-xl'>{label}</label>
        <input 
          onChange={ e => onChange(e.target.value)}
          className='border border-gray-400 focus:border-r-black bg-transparent focus:bg-white font-light text-base rounded py-3 px-4 outline-none transition-all'
          placeholder={placeholder} required={required} value={value} id={label} type={type} />
    </div>
  )
}
InputWithLabel.defaultProps = { type: 'text', required: false}
export default InputWithLabel
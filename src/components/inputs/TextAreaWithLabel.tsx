import React from 'react'


type TextAreaProps = {
    placeholder?: string,
    value?: string
    label?: string,
    rows?: number,
    labelStyle?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextAreaWithLabel = ({placeholder, value, label, rows, labelStyle}: TextAreaProps): JSX.Element => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={placeholder} 
          className={`text-prazzle-black font-medium lg:font-semibold text-base mb-1 lg:text-xl ${labelStyle}`}>{label}</label>
        <textarea 
            className='border border-prazzle-gray focus:border-prazzle-yellow bg-transparent focus:bg-white font-light text-base rounded-md py-3 px-4 outline-none transition-all'
            id={placeholder} rows={rows}>{value}</textarea>
    </div>
  )
}
TextAreaWithLabel.defaultProps = { labelStyle: '', rows:10}

export default TextAreaWithLabel
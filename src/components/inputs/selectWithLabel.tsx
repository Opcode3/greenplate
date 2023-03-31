import React from 'react'


type InputProps = {
    placeholder?: string,
    data?: {type: string, value: string}[]
    label?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectWithLabel = ({placeholder, data, label}: InputProps): JSX.Element => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={label} className='text-r-black font-medium lg:font-semibold mb-2 text-base lg:text-xl'>{label}</label>
        <select name="" id={label}
            className='border border-gray-400 focus:border-r-black bg-transparent focus:bg-white font-light text-base rounded py-4 px-4 outline-none transition-all'
          >
            {
              data?.map((item, index) => <option key={index} value={item.value}>{item.type}</option>)
            }
        </select>
    </div>
  )
}

export default SelectWithLabel
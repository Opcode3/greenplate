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
        <label htmlFor={placeholder} className='text-prazzle-black font-medium lg:font-semibold text-base lg:text-xl'>{label}</label>
        <select name="" id=""
            className='border border-prazzle-gray focus:border-prazzle-yellow bg-transparent focus:bg-white font-light text-base rounded-md py-3 px-4 outline-none transition-all'
          >
            {
              data?.map((item, index) => <option key={index} value={item.value}>{item.type}</option>)
            }
        </select>
    </div>
  )
}

export default SelectWithLabel
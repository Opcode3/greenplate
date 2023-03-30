import React from 'react'

const InputImageUpload = ({label}:{label?: string}) => {
  return (
    <div>
      <label htmlFor=""
      className='text-prazzle-black font-medium lg:font-semibold text-base lg:text-xl'
      >{label}</label>
      <div className="border border-prazzle-gray mt-1 rounded-[10px] border-dashed w-full h-32">
        
      </div>
    </div>
  )
}

InputImageUpload.defaultProps = { label: 'Upload Id (optional)'}

export default InputImageUpload

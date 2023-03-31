import DeleteIcon from '@/components/icons/deleteIcon'
import React from 'react'

type ModalLayoutProps = {
    children: JSX.Element
}
const ModalLayout = ({children} : ModalLayoutProps) => {
  return (
    <div className='w-full h-screen fixed bg-r-black top-0 z-10 bg-opacity-50 overflow-auto'>

        <div className="flex flex-col items-center pt-[15vh]">
            {children}
            <div className=" my-3 p-3 cursor-pointer"> <DeleteIcon  className='hover:w-24 w-16 transition-all ' /> </div>
        </div>
    </div>
  )
}

export default ModalLayout
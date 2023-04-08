import React from 'react'

const PageHeader = ({title}: { title: string}) => {
  return (
    <div className='flex justify-between items-center py-5 pt-20 bg-green-100 px-7 rounded-b mb-8 '>
        <h1 className=' text-r-black text-5xl'>{title}</h1>
    </div>
  )
}

export default PageHeader
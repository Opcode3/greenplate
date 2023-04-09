import Link from 'next/link'
import React from 'react'

const PartnerPageHeader = ({title}: {title: string}) => {
  return (
    <div className="py-2 mt-6 mb-3 flex justify-between items-center">
        <h1 className='text-r-black text-5xl font-semibold capitalize'>{title}</h1>
        <ul className='flex items-center w-fit gap-6'>
        <li>
            <Link href={'/partner/setting'} className='text-r-black py-2 px-3 hover:underline transition-all rounded'>Setting</Link>
        </li>
        <li>
            <Link href={'/partner/logout'} className='py-2 px-3 bg-red-600 text-white transition-all rounded'>Logout</Link>
        </li>
        </ul>
    </div>
  )
}

export default PartnerPageHeader

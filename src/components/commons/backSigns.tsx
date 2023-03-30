import React from 'react'
import ArrowLeft from '../icons/arrowLeft'
import Link from 'next/link'

const BackSigns = ({url}:{url: string}) => {
  return (
    <Link href={url} className='flex items-center gap-1'>
        <span className='w-fit inline-block rounded-full p-[1px] border border-prazzle-black'><ArrowLeft /></span>
        <span className='text-prazzle-black text-xl font-semibold'>Bank</span>
    </Link>
  )
}

BackSigns.defaultProps = { url: ''}

export default BackSigns

import React from 'react'
import Image from 'next/image'
import image from '/public/images/blog/fd5cae_7acbef3e7bf2482c99243963b19d2f32_mv2.webp'

const DiscoveryItem = () => {
  return (
    <div className=" w-full h-[480px] relative rounded-2xl overflow-hidden">
        <div className=" w-full h-full relative"><Image fill alt='' style={{ objectFit:'cover', objectPosition: '50% 50%'}} src={image} /></div>
        <div className=" w-full h-[480px]  bg-prazzle-black bg-opacity-60 absolute top-0 left-0 flex flex-col justify-end pl-4 pb-8">
            <strong className='text-3xl text-white font-semibold'>Carlos Fama</strong>
            <strong className='text-2xl text-white font-medium'>Digital Artist </strong>
            <strong className='text-xl text-white font-normal'>Cádiz, Spain</strong>
        </div>
    </div>
  )
}

export default DiscoveryItem

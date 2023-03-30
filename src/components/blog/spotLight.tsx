
import React from 'react'
import image from '/public/images/blog/fd5cae_7acbef3e7bf2482c99243963b19d2f32_mv2.webp'
import Image from 'next/image'


const SpotLight = () => {
  return (
    <div className='flex w-full flex-col gap-3'>
        <div className="overflow-hidden grid rounded-[20px_20px_0px_0px] h-[470px] w-full relative">
            <Image src={image} alt='image name' fill style={{objectFit: 'cover', objectPosition: 'top'}} />
        </div>        
        <div className='flex flex-col gap-1'>
            <strong className='uppercase text-prazzle-black text-base md:text-xl font-normal'>SPOTLIGHT</strong>
            <h3 className='text-prazzle-black text-xl md:text-[28px] font-medium'>“How photography became therapeutic and saved me from a sad place”- Ismaila Rufai</h3>
        </div>
    </div>
  )
}

export default SpotLight
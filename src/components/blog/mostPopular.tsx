import Image from 'next/image'
import React from 'react'
import img_1 from '/public/images/blog/fd5cae_6c54a1902a224f6989b7b486cb8ce412_mv2.webp'
import image from '/public/images/blog/fd5cae_7acbef3e7bf2482c99243963b19d2f32_mv2.webp'

const MostPopular = ({title, data}: {title: string, data?: {}[]}) => {
  return (
    <div >
        <h3 className='text-2xl font-normal font-lato text-prazzle-black my-3'> {title} </h3>

        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-[70px_auto] sm:grid-cols-[100px_auto] gap-2 md:gap-3">
                <div className="h-[70px]  w-[70px] sm:h-[100px] sm:w-[100px] relative overflow-hidden rounded-[10px]">
                    <Image fill style={{objectFit: "cover", objectPosition:"top"}} alt='' src={image} />
                </div>
                <div className="flex flex-col pt-1 sm:pt-2 md:pt-3">
                    <strong className='font-normal text-sm md:text-base'>PHOTOGRAPHY AND FILM</strong>
                    <p className='text-base md:text-xl font-medium'>Why Props Are Important in Product Photography</p>
                </div>
            </div>
            
            <div className="grid grid-cols-[70px_auto] sm:grid-cols-[100px_auto] gap-2 md:gap-3">
                <div className="h-[70px]  w-[70px] sm:h-[100px] sm:w-[100px] relative overflow-hidden rounded-[10px]">
                    <Image fill style={{objectFit: "cover", objectPosition:"top"}} alt='' src={img_1} />
                </div>
                <div className="flex flex-col pt-1 sm:pt-2 md:pt-3">
                    <strong className='font-normal text-sm md:text-base'>PHOTOGRAPHY AND FILM</strong>
                    <p className='text-base md:text-xl font-medium'>Why Props Are Important in Product Photography</p>
                </div>
            </div>

            <div className="grid grid-cols-[70px_auto] sm:grid-cols-[100px_auto] gap-2 md:gap-3">
                <div className="h-[70px]  w-[70px] sm:h-[100px] sm:w-[100px] relative overflow-hidden rounded-[10px]">
                    <Image fill style={{objectFit: "cover", objectPosition:"top"}} alt='' src={image} />
                </div>
                <div className="flex flex-col pt-1 sm:pt-2 md:pt-3">
                    <strong className='font-normal text-sm md:text-base'>PHOTOGRAPHY AND FILM</strong>
                    <p className='text-base md:text-xl font-medium'>Why Props Are Important in Product Photography</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MostPopular
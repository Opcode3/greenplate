import Image from 'next/image'
import React from 'react'
import image from '/public/images/blog/fd5cae_6c54a1902a224f6989b7b486cb8ce412_mv2.webp'
import Link from 'next/link'

const PostItem = ({id}: {id: string}) => {
  return (
    <Link href={`/blog/${id}`} className='relative'>
        <div className="overflow-hidden grid rounded-[20px_20px_0px_0px] h-[363px] w-full relative">
            <Image src={image} alt='image name' fill style={{objectFit: 'cover', objectPosition: 'top'}} className='object-cover' />
        </div>        
        <div>
            <strong className='uppercase text-prazzle-black text-sm md:text-lg font-normal'>Culture</strong>
            <h3 className='text-prazzle-black text-base sm:text-xl lg:text-2xl font-semibold'>Nudity in Africa: Re-visiting the Pre-Colonial and Colonial Times</h3>
        </div>
    </Link>
  )
}

export default PostItem
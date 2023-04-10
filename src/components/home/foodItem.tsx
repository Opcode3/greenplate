import Image from 'next/image'
import React from 'react'

const FoodItem = () => {
    const img = require('/public/images/restaurant/1.jpg')

  return (
    <div className='bg-white transition-all border border-transparent hover:border-gray-400 hover:bg-gray-200 cursor-pointer px-4 pt-5 pb-3 rounded w-fit'>
        <div className=" relative h-44 w-44 rounded-full overflow-hidden">
            <Image src={img} alt='image ' fill style={{objectFit: 'cover', objectPosition: '50% 50%'}} />
        </div>
        <div className=" mt-2">
            <h4 className='text-lg'>Fried Chicken soup</h4>
            <strong className='text-2xl'>₦ 489</strong>
        </div>
    </div>
  )
}

export default FoodItem
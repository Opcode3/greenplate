import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type restaurantType = {
    name: string;
    image_url: string;
    review: number;
}
type RestaurantProps = {
    data: restaurantType
}
const Restaurant = ({data} : RestaurantProps) => {
    const img = require('/public/images/restaurant/1.jpg')
  return (
    <Link href={'/r'} className='rounded overflow-hidden'>
      <div className=" w-full h-48 relative"><Image fill src={img} style={{ objectFit: 'cover', objectPosition: '50% 50%'}} alt=''/></div>
      <div className="border border-t-0 px-3 py-3">
        <h3 className='font-semibold text-lg'>{data.name}</h3>
      </div>
    </Link>
  )
}



export default Restaurant

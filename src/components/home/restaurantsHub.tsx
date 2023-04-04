import React from 'react'
import Restaurant from './restaurant'

type restaurantType = {
  name: string;
  image_url: string;
  review: number;
}

type RestaurantsHubProps = {
  title: string,
  data: restaurantType[]
}

const RestaurantsHub = ({title, data}: RestaurantsHubProps) => {
  
  return (
    <div className=' w-[1400px] max-w-full mx-auto py-10 px-10'>
      <div className=" py-2 border-b mb-5">
        <h3 className='text-r-black font-bold text-xl'>{title}</h3>
      </div>
      <div className=" grid gap-4 grid-cols-3 xl:grid-cols-4 w-full">
        {
          data.map((restaurant, index) => <Restaurant key={index} data={restaurant} />)
        }
      </div>
    </div>
  )
}

export default RestaurantsHub

import Link from 'next/link'
import React from 'react'
import DiscoveryItem from './discoveryItem'

const DiscoverCreatives = () => {
  return (
      <div className="w-full bg-prazzle-gray-0 pt-6 md:pt-8 lg:pt-12 pb-12 md:pb-16 lg:pb-24">
        <div className=' max-w-[92%] w-[480px] sm:w-[1280px] sm:max-w-[90%] mx-auto mt-5 '>
          <div className="max-w-full w-[950px] flex flex-col gap-4 items-center justify-center mx-auto mb-10">
              <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-prazzle-black text-center '>Discover Creatives</h2>
              <p className=' text-base md:text-lg lg:text-2xl text-prazzle-black text-center'>Find talents in the creative industry. Support them by buying them coffee, purchasing a Merch or hiring them for your next project</p>
              <Link href={''}
                className={`cursor-pointer w-fit font-semibold py-3 px-4 transition-all hover:bg-yellow-400 rounded-md text-prazzle-black bg-prazzle-yellow`}
              >Explore Now</Link>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-x-6 gap-y-6">
              <DiscoveryItem />
              <DiscoveryItem />
              <DiscoveryItem />
              <DiscoveryItem />
              <DiscoveryItem />
              <DiscoveryItem />
              <DiscoveryItem />
          </div>
      </div>
    </div>
  )
}

export default DiscoverCreatives
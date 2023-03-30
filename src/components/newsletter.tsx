import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex justify-center py-8 md:py-12 lg:py-16 max-w-[94%] sm:max-w-[90%] mx-auto'>
        <div className="bg-prazzle-black w-[790px] md:w-[1005px] max-w-full py-10 md:py-14 lg:py-20 px-10 md:px-24 lg:px-32 flex gap-6 md:gap-10 flex-col rounded-3xl">
            <h1 className='font-medium text-2xl md:text-3xl lg:text-5xl text-white text-center'>Subscribe to Our Newsletter</h1>
            <p className='font-normal text-base md:text-xl lg:text-[28px] text-white text-center'>Subscribe to our newsletter and be part of our growing community.</p>
            <div className="w-full">
                <form className="bg-prazzle-gray flex px-2 lg:px-4 py-2 lg:py-3 mx-auto gap-4 items-center w-[96%] lg:w-[80%] border border-white rounded-[10px]" onSubmit={e => {}}>
                    <input type='email' placeholder='Enter Your Email' 
                        className='border-none outline-none bg-transparent text-base md:text-lg font-semibold w-full py-2 px-1'
                    />
                    <button 
                      className={`cursor-pointer font-semibold py-2 lg:py-3 px-4 transition-all hover:bg-yellow-400 rounded-md text-prazzle-black bg-prazzle-yellow w-fit`}
                    >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
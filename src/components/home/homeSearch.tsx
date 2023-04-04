import React from 'react'
import UserIcon from '../icons/userIcon'
import Button from '../buttons/button'

const HomeSearch = () => {
  return (
    <div className='bg-search-pattern'>
      <div className="flex min-h-[400px] py-16 flex-col justify-center items-center gap-7">
        <h1 className='text-center text-3xl 2xl:text-5xl text-white drop-shadow-2xl'>Find your table and reserve your meal</h1>
        <div className=" flex items-center flex-col xl:flex-row gap-5">
            <div className="flex items-center bg-white py-3 px-5 rounded gap-6">
                <input type="time" name="" id="" className=' outline-none border-none' />
                <input type="date" name="" id="" className=' outline-none border-none' />
                <div className=" flex items-center bg-white w-fit rounded gap-2">
                    <UserIcon />
                    <select name="" id="">
                        <option value="1">1 People</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7">7 People</option>
                        <option value="8">8 People</option>
                        <option value="9">9 People</option>
                        <option value="10">10 People</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className=" bg-white rounded py-1 px-5 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="search" placeholder='Location, restaurant and cuisine' className=' w-[270px] xl:w-[296px] outline-none border-none py-2 px-3' />
                </div>
                <Button value="Let's go" classname=' bg-red-600 hover:bg-red-800 px-6' onClick={e => {}} />
            </div>            
        </div>
      </div>
    </div>
  )
}

export default HomeSearch

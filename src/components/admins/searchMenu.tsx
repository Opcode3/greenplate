import React from 'react'
import SearchIcon from '../icons/searchIcon'

const SearchMenu = () => {
  return (
    <div className="">
        <div className='border py-2 px-5 rounded-full flex items-center justify-start gap-2'>
            <label htmlFor="search"><SearchIcon /></label>
            <input type='search' id='search' placeholder='Search for' 
                className='outline-none focus:outline-none font-normal border-none w-96 text-base'
            />
        </div>
    </div>
  )
}

export default SearchMenu

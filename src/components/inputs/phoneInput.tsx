import { getCountriesCode, getFlagEmoji } from '@/utils';
import React from 'react'

type PhoneProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput = ({}: PhoneProps): JSX.Element => {

    const [countryList, setCountryList] = React.useState< {country: string, code: string, iso: string}[] | null>(null);

    React.useEffect(()=>{
        setCountryList(getCountriesCode());
    }, [])
       
  return (
    <div className='flex flex-col'>
        <label htmlFor='phone_number' className='text-prazzle-black font-medium lg:font-semibold text-base lg:text-xl'>Phone number</label>
        <div className='grid grid-cols-[110px_auto] gap-4'>
            <select 
                className='border border-prazzle-gray focus:border-prazzle-yellow bg-transparent focus:bg-white font-light text-base rounded-md py-3 px-3 pr-1 outline-none transition-all'
            >
                    {
                       countryList ? countryList.map((item, index) => <option key={index}>{getFlagEmoji(item.iso)+"\t"+`  +${item.code}`}</option>) : "No"
                    }
            </select>
            <input 
                className='border border-prazzle-gray focus:border-prazzle-yellow bg-transparent focus:bg-white font-light text-base rounded-md py-3 px-4 outline-none transition-all'
                placeholder='' type='number' id='phone_number' />
        </div>
    </div>
  )
}

export default PhoneInput
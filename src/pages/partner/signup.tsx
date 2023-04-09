import React from 'react'
import Image from 'next/image'
import logo from "/public/images/logo.svg"
import InputWithLabel from '@/components/inputs/inputWithLabel'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import Header from '@/components/baselayout/header'
import Head from 'next/head'
import SelectWithLabel from '@/components/inputs/selectWithLabel'

const PartnerSignupPage = () => {

  const cuisineTypes: {type: string, value: string}[] = [
    {type: 'Local Restaurant', value: 'local'},
    {type: 'Chinese Restaurant', value: 'chinese'},
    {type: 'Bar palour Restaurant', value: 'bar'},
    {type: 'Pizza and Fries Restaurant', value: 'pizza'},
  ]

  
  return (
    <div className=' flex h-screen flex-col mt-0 justify-start w-full'>
        {/* <Header /> */}
        <Head>
            <title>Register - GreenPlate Business</title>
        </Head>
        <div className=" w-full mt-[5vh] md:mt-[10vh]">
            <Link href={'/'} className="mb-8 justify-center flex items-center">
                <div className="grid mr-1 w-16 relative h-16 "> <Image src={logo} style={{ objectFit: 'contain', objectPosition: '50% 50%'}} fill alt=''/> </div>
                <span className='text-4xl font-extrabold text-gray-600'>Green</span>
                <span className='text-4xl font-extrabold text-green-400'>Plate</span>
            </Link>
            <div className="w-[90%] mx-auto sm:w-[500px] flex gap-4 flex-col">
                <InputWithLabel label='Business name' onChange={e=> {}} />
                <InputWithLabel label='First name' onChange={e=> {}} />
                <InputWithLabel label='Last name' onChange={e=> {}} />
                <InputWithLabel label='Email' type='email' onChange={e=> {}} />
                <InputWithLabel label='Restaurant address' onChange={e=> {}} />
                <SelectWithLabel label='Select cuisine type' data={cuisineTypes} onChange={e=> {}} />
                <InputWithLabel label='Password' type='password' onChange={e=> {}} />
                <div className="flex justify-between items-center">
                    {/* <Link href={''} className='font-medium lg:text-xl'>Privacy Policy</Link> */}
                    <label htmlFor="agree" className='flex items-center gap-2'>
                      <input type="checkbox" name="" id="agree" className='w-8 h-8' />
                      <p>By checking this box, you are agreeing to the <Link href={''} className='font-medium text-green-600 underline'>terms and condition</Link> of this platform.</p>
                    </label>
                </div>
                <Button value='Create business account' classname='text-2xl mt-7' onClick={e => {}} />
                <Link href={'/partner/signin'} className='font-medium text-xl mt-4 mb-10 text-green-600 block text-center'>Already have a partner account?</Link>

            </div>
            
        </div>
    </div>
  )
}

export default PartnerSignupPage

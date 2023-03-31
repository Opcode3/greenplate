import ModalLayout from '@/layout/modalLayout'
import React from 'react'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import InputWithLabel from '../inputs/inputWithLabel'

const RegisterModal = () => {
  return (
    <ModalLayout>
        <div className="flex w-[450px] px-6 pt-8 pb-5 bg-white rounded-md shadow-lg" >
            <div className=" w-full flex flex-col gap-3">
                <InputWithLabel label='First name' onChange={e=> {}} />
                <InputWithLabel label='Last name' onChange={e=> {}} />
                <InputWithLabel label='Email' type='email' onChange={e=> {}} />
                <InputWithLabel label='Home address' onChange={e=> {}} />
                <InputWithLabel label='Password' type='password' onChange={e=> {}} />
                
                <Button value='Login' classname='text-2xl mt-2' onClick={e => {}} />
                <Link href={''} className='font-medium text-xl mt-2 text-r-black block text-center'>Don&apos;t have an account? <b className='text-green-600 '>Register now.</b></Link>

            </div>
        </div>
    </ModalLayout>
  )
}

export default RegisterModal
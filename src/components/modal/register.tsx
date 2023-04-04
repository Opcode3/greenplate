import ModalLayout from '@/layout/modalLayout'
import React from 'react'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import InputWithLabel from '../inputs/inputWithLabel'
import { UseStore } from '@/hooks/context'
import { REDUCER_ACTION } from '@/hooks/actions'
import { MODAL_COMPONENT } from '@/hooks/states'

const RegisterModal = () => {
  const {dispatch} = UseStore();
  return (
    <ModalLayout>
        <div className="flex w-[450px] px-6 pt-8 pb-5 bg-white rounded-md shadow-lg" >
            <div className=" w-full flex flex-col gap-3">
                <InputWithLabel label='Full name' onChange={e=> {}} />
                <InputWithLabel label='Email' type='email' onChange={e=> {}} />
                <InputWithLabel label='Home address' onChange={e=> {}} />
                <InputWithLabel label='Password' type='password' onChange={e=> {}} />
                
                <Button value='Create account' classname='text-2xl mt-2' onClick={e => {}} />
                <span className='font-medium text-xl mt-2 text-r-black block text-center'>Already have an account? <b onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_SWITCH_COMPONENT, payload: MODAL_COMPONENT.LOGIN})} className='text-green-600 cursor-pointer'>Log in.</b></span>
            </div>
        </div>
    </ModalLayout>
  )
}

export default RegisterModal
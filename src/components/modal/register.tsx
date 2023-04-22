import ModalLayout from '@/layout/modalLayout'
import React from 'react'
import Button from '@/components/buttons/button'
import InputWithLabel from '../inputs/inputWithLabel'
import { UseStore } from '@/hooks/context'
import { REDUCER_ACTION } from '@/hooks/actions'
import { MODAL_COMPONENT } from '@/hooks/states'
import { Roles } from '@/utils/roles'
import { register } from '@/services'
import { toast } from 'react-toastify'

const RegisterModal = () => {
  const {dispatch} = UseStore();
  const [name, setName] = React.useState<string | undefined>()
  const [email, setEmail] = React.useState<string | undefined>()
  const [address, setAddress] = React.useState<string | undefined>()
  const [password, setPassword] = React.useState<string | undefined>()
  const [isReg, setIsReg] = React.useState<boolean>(false);

  const registerCustomerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsReg(true);
    const newUserInfo = { name, address, role: Roles.CUSTOMER, email}
    register(email, password, newUserInfo)
      .then((res) => {
        toast.success('Registration was successful. Redirecting you to login page!')
        setTimeout(() => {
          dispatch({type: REDUCER_ACTION.MODAL_SWITCH_COMPONENT, payload: MODAL_COMPONENT.LOGIN})
        }, 2500)
      })
      .catch(err => { toast.error("Ooooop! An error was encountered while trying to register customer.")})
      .finally(() => { setIsReg(false) })
  }



  return (
    <ModalLayout>
        <div className="flex w-[450px] px-6 pt-8 pb-5 bg-white rounded-md shadow-lg" >
            <form onSubmit={e => registerCustomerHandler(e)} className=" w-full flex flex-col gap-3">
                <InputWithLabel label='Full name' onChange={value=> setName(value)} />
                <InputWithLabel label='Email' type='email' onChange={value => setEmail(value)} />
                <InputWithLabel label='Home address' onChange={value => setAddress(value)} />
                <InputWithLabel label='Password' type='password' onChange={value => setPassword(value)} />
                <Button status={isReg} value='Create account' classname='text-2xl mt-2' onClick={e => {}} />
                <span className='font-medium text-xl mt-2 text-r-black block text-center'>Already have an account? <b onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_SWITCH_COMPONENT, payload: MODAL_COMPONENT.LOGIN})} className='text-green-600 cursor-pointer'>Log in.</b></span>
            </form>
        </div>
    </ModalLayout>
  )
}

export default RegisterModal
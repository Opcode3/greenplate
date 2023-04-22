import ModalLayout from '@/layout/modalLayout'
import React from 'react'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import InputWithLabel from '../inputs/inputWithLabel'
import { UseStore } from '@/hooks/context'
import { REDUCER_ACTION } from '@/hooks/actions'
import { MODAL_COMPONENT } from '@/hooks/states'
import { login } from '@/services'
import Storage from '@/utils/storage'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'





const storage = new Storage();

const LoginModal = () => {
  const {dispatch} = UseStore();
  const [email, setEmail] = React.useState<string | undefined>()
  const [password, setPassword] = React.useState<string | undefined>()
  const [isLogIn, setIsLogin] = React.useState<boolean>(false);
  const router = useRouter()


  const userLoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLogin(true)
    
    login(email, password)
      .then(res => {
          console.log(res)
          if( res && res.user && res.user.displayName === 'CUSTOMER'){
              storage.set('token', res.user.accessToken)
              storage.set('role', res.user.displayName);
              storage.set('userDetail', JSON.stringify(res.userDetail));
              toast.success('Login was successful! Redirecting to home page...')
              dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.EMPTY})
              setTimeout(() => {
                  router.push('/');
              }, 1000)
          }else{
              toast.info('This login credentials is not associated to a customer account..')
          }
      }).catch( error => {
          toast.error('Unable to identify user email or password!', error)
      }).finally(() => {
        setIsLogin(false)
      })
  }
  return (
    <ModalLayout>
        <div className="flex w-[450px] px-6 pt-8 pb-5 bg-white rounded-md shadow-lg" >
            <form onSubmit={e => userLoginHandler(e)} className=" w-full flex flex-col gap-5">
                <InputWithLabel label='Email' type='email' onChange={ value => setEmail(value)} />
                <InputWithLabel label='Password' type='password' onChange={ value => setPassword(value)} />
                <Button status={isLogIn} value='Login' classname='text-2xl mt-2' onClick={e => {}} />
                <span className='font-medium text-xl mt-2 text-r-black block text-center'>Don&apos;t have an account? <b onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_SWITCH_COMPONENT, payload: MODAL_COMPONENT.REGISTER}) } className='text-green-600 cursor-pointer'>Register now.</b></span>
            </form>
        </div>
    </ModalLayout>
  )
}

export default LoginModal
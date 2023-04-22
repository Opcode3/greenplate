import Button from '@/components/buttons/button'
import InputWithLabel from '@/components/inputs/inputWithLabel'
import React from 'react'
import Image from 'next/image'
import logo from "/public/images/logo.svg"
import Link from 'next/link'
import Head from 'next/head'
import { login } from '@/services'
import Storage from '@/utils/storage'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'


const storage = new Storage()
const LoginAdminPage = () => {
    const [email, setEmail] = React.useState<string | undefined>('')
    const [password, setPassword] = React.useState<string | undefined>('')
    const [isLogIn, setIsLogin] = React.useState<boolean>(false);

    const router = useRouter()

    const loginHandler = (e: React.FormEvent) => {
      e.preventDefault()
        setIsLogin(true);
        login(email, password)
            .then(res => {
                console.log('Me na',res)
                if( res && res.user && res.user.userDetail.role === 'ADMIN'){
                    storage.set('token', res.user.accessToken)
                    storage.set('role', res.user.displayName);
                    storage.set('userDetail', JSON.stringify(res.userDetail));
                    toast.success('Login was successful! Redirecting to dashboard...')
                    setTimeout(() => {
                      console.log('Yes')
                        router.push('/admin');
                    }, 2500)
                }else{
                    toast.info('This login credentials is not associated to an admin account..')
                }
            }).catch( error => {
                toast.error('Unable to identify user email or password!', error)
            }).finally(() => {
                setIsLogin(false)
            })
    }

  return (
    <div className=' flex h-screen flex-col mt-0 justify-start w-full'>
    <Head>
        <title>Login - Administrator, GreenPlate </title>
    </Head>
    <div className=" w-full mt-[10vh] md:mt-[15vh]">
        <Link href={'/'} className="mb-1 justify-center flex items-center">
            <div className="grid mr-1 w-16 relative h-16 "> <Image src={logo} style={{ objectFit: 'contain', objectPosition: '50% 50%'}} fill alt=''/> </div>
            <span className='text-4xl font-extrabold text-gray-600'>Green</span>
            <span className='text-4xl font-extrabold text-green-400'>Plate</span>
        </Link>
        <h1 className='text-3xl text-center font-bold text-r-black mb-7'>Administrative Login</h1>
        <form onSubmit={ e=> loginHandler(e)} className="w-[90%] mx-auto sm:w-[450px] flex gap-4 flex-col">
            <InputWithLabel value={email} required={true} label='Email' type='email' onChange={ value => setEmail(value)} />
            <InputWithLabel value={password} required={true} label='Password' type='password' onChange={value => setPassword(value)} />
            <Button status={isLogIn} value='Login' classname='text-2xl mt-7' onClick={e => {}} />
        </form>
        
    </div>
</div>
  )
}

export default LoginAdminPage

import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import logo from "/public/images/logo.svg"
import InputWithLabel from '@/components/inputs/inputWithLabel'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import Header from '@/components/baselayout/header'
import Head from 'next/head'

import { login } from '@/services/index'
import Storage from '@/utils/storage'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'


const storage = new Storage()
const PartnerSigninPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLogIn, setIsLogin] = useState<boolean>(false);

    const loginHandler = (e: FormEvent) => {
        e.preventDefault()
        setIsLogin(true);
        login(email, password)
            .then(res => {
                console.log(res)
                if( res && res.user && res.user.displayName === 'PARTNER'){
                    storage.set('token', res.user.accessToken)
                    storage.set('role', res.user.displayName);
                    storage.set('userDetail', JSON.stringify(res.userDetail));
                    toast.success('Login was successful! Redirecting to dashboard...')
                    setTimeout(() => {
                        setIsLogin(false)
                        router.push('/partner');
                    }, 2500)
                }else{
                    toast.info('This login credentials is not associated to a partner..')
                }
            }).catch( error => {
                toast.error('Unable to identify user email or password!', error)
            })
    }
  return (
    <div className=' flex h-screen flex-col mt-0 justify-start w-full'>
        {/* <Header /> */}
        <Head>
            <title>Login - GreenPlate Business</title>
        </Head>
        <div className=" w-full mt-[10vh] md:mt-[15vh]">
            <Link href={'/'} className="mb-8 justify-center flex items-center">
                <div className="grid mr-1 w-16 relative h-16 "> <Image src={logo} style={{ objectFit: 'contain', objectPosition: '50% 50%'}} fill alt=''/> </div>
                <span className='text-4xl font-extrabold text-gray-600'>Green</span>
                <span className='text-4xl font-extrabold text-green-400'>Plate</span>
            </Link>
            <form onSubmit={ e=> loginHandler(e)} className="w-[90%] mx-auto sm:w-[500px] flex gap-4 flex-col">
                <InputWithLabel value={email} required={true} label='Email' type='email' onChange={ value => setEmail(value)} />
                <InputWithLabel value={password} required={true} label='Password' type='password' onChange={value => setPassword(value)} />
                <div className="flex justify-between items-center">
                    <Link href={''} className='font-medium lg:text-xl'>Forgot Password</Link>
                    <Link href={''} className='font-medium lg:text-xl'>Privacy Policy</Link>
                </div>
                <Button status={isLogIn} value='Login' classname='text-2xl mt-7' onClick={e => {}} />
                <Link href={'/partner/signup'} className='font-medium text-xl mt-10 text-green-600 block text-center'>Become a restaurant partner?</Link>
            </form>
            
        </div>
    </div>
  )
}

export default PartnerSigninPage

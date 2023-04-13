import Button from '@/components/buttons/button'
import InputWithLabel from '@/components/inputs/inputWithLabel'
import React from 'react'
import Image from 'next/image'
import logo from "/public/images/logo.svg"
import Link from 'next/link'
import Head from 'next/head'


const LoginAdminPage = () => {
    const [email, setEmail] = React.useState<string | undefined>()
    const [password, setPassword] = React.useState<string | undefined>()

    const loginHandler = (e: React.FormEvent) => {
      e.preventDefault()
      const userCredential = { email, password}
      console.log(userCredential)
    }

  return (
    <div className=' flex h-screen flex-col mt-0 justify-start w-full'>
    {/* <Header /> */}
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
            <Button value='Login' classname='text-2xl mt-7' onClick={e => {}} />
        </form>
        
    </div>
</div>
  )
}

export default LoginAdminPage

import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import logo from "/public/images/logo.svg"
import InputWithLabel from '@/components/inputs/inputWithLabel'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import Head from 'next/head'
import SelectWithLabel from '@/components/inputs/selectWithLabel'
import { Roles } from '@/utils/roles'
import { toast } from 'react-toastify'
import { register } from '@/services/index'
import { useRouter } from 'next/router'

const PartnerSignupPage = () => {

  const router = useRouter();

  const cuisineTypes: {type: string, value: string}[] = [
    {type: 'Select your cuisine type', value: ''},
    {type: 'Local Restaurant', value: 'local'},
    {type: 'Chinese Restaurant', value: 'chinese'},
    {type: 'Bar palour Restaurant', value: 'bar'},
    {type: 'Pizza and Fries Restaurant', value: 'pizza'},
  ]

  const [businessName, setBusinessName] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const registerHandler = (e: FormEvent) => {
    e.preventDefault();

    const newUserInfo = {
      businessName, fullname, address, cuisine, role: Roles.PARTNER,
    }

    register(email, password, newUserInfo)
      .then(res => {
        toast.success('Registration was successful. Redirecting you to login page!')
        console.log(res)
        setTimeout(() => {
          router.push('/partner/signin');
        }, 2500)
      }).catch(error => {
        toast.error('Ooooop! An error was encountered while trying to register partner.')
      })
  }

  
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
            <form onSubmit={ e => registerHandler(e)} className="w-[90%] mx-auto sm:w-[500px] flex gap-4 flex-col">
                <InputWithLabel label='Business name' required={true} onChange={ value => setBusinessName(value)} />
                <InputWithLabel label='Fullname' required={true} onChange={ value => setFullname(value)} />
                <InputWithLabel label='Email' type='email' required={true} onChange={ value => setEmail(value) } />
                <InputWithLabel label='Restaurant address' onChange={value => setAddress(value)} />
                <SelectWithLabel label='Select cuisine type' data={cuisineTypes} onChange={value => setCuisine(value)} />
                <InputWithLabel label='Password' type='password' required={true} onChange={value => setPassword(value)} />
                <div className="flex justify-between items-center">
                    <label htmlFor="agree" className='flex items-center gap-2'>
                      <input type="checkbox" required name="" id="agree" className='w-8 h-8' />
                      <p>By checking this box, you are agreeing to the <Link href={''} className='font-medium text-green-600 underline'>terms and condition</Link> of this platform.</p>
                    </label>
                </div>
                <Button value='Create business account' classname='text-2xl mt-7' onClick={e => {}} />
                <Link href={'/partner/signin'} className='font-medium text-xl mt-4 mb-10 text-green-600 block text-center'>Already have a partner account?</Link>
            </form>
            
        </div>
    </div>
  )
}

export default PartnerSignupPage

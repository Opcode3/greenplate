import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "/public/images/logo.svg"
import { UseStore } from '@/hooks/context'
import { REDUCER_ACTION } from '@/hooks/actions'
import { MODAL_COMPONENT } from '@/hooks/states'


type HeaderProps = {
  title: string
}


const Header = ({title}: HeaderProps) => {


  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false)
  
  const navLinks: {url: string, name: string}[] = [
    {url: '/partner/signin', name: 'For Businesses'},
    {url: '/about-greenplate', name: 'About GreenPlate'},
    {url: '/faqs', name: 'FAQs'}
  ]

  const {state, dispatch} = UseStore();
  
  return (
    
    <>

    <div className=" bg-gray-200 flex justify-end items-center h-8 px-[3%] sm:px-[8%] gap-3">
      {
        navLinks.map((link, index) => <Link key={index} href={link.url} className='px-2 py-2 text-sm font-medium'>{link.name}</Link>)
      }
      
    </div>

    <header className=' bg-r-black shadow-inner flex flex-col sm:grid sm:grid-cols-[250px_auto] px-[3%] sm:px-[8%] py-2'>
      <Link href={'/'} className="flex items-center">
        <div className="grid mr-1"> <Image src={logo} alt=''/> </div>
        <span className='text-2xl font-extrabold text-gray-100'>Green</span>
        <span className='text-2xl font-extrabold text-green-400'>Plate</span>
      </Link>
      <div className=" hidden w-24 bg-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
      </div>
      <div className="hidden sm:flex w-full justify-end">
        <span className={`px-4 rounded py-2 text-sm text-white cursor-pointer`}
          onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.LOGIN})}
          >Sign in</span>
        <span className={`px-4 rounded py-2 text-sm font-medium bg-white cursor-pointer text-r-black ml-2 border-4 border-gray-200`}
          onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.REGISTER})}
        >Sign up</span>
      </div>
    </header>
  
    <Head>
      <title>{title}</title>
    </Head>
    </>
  )
}

Header.defaultProps = {title: "GreenPlate - Restaurant Reservation System."}
export default Header;

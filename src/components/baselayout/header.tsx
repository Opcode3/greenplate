import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "/public/images/logo.svg"
import { UseStore } from '@/hooks/context'
import { REDUCER_ACTION } from '@/hooks/actions'
import { MODAL_COMPONENT } from '@/hooks/states'
import Storage from '@/utils/storage'


type HeaderProps = {
  title: string
  page: string
}


const storage = new Storage()

const Header = ({title, page}: HeaderProps) => {

  const isIntact = storage.get('token') && storage.get('role') === 'CUSTOMER';

  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false)
  
  const navLinks: {url: string, name: string, page: string}[] = [
    {url: '/partner/signin', name: 'For Businesses', page: 'partner'},
    {url: '/about-greenplate', name: 'About GreenPlate', page: 'about'},
    {url: '/faqs', name: 'FAQs', page: 'faq'}
  ]

  const {state, dispatch} = UseStore();
  
  return (
    
    <>

    <div className=" bg-gray-200 hidden lg:flex justify-end items-center h-8 px-[3%] sm:px-[8%] gap-3">
      {
        navLinks.map((link, index) => <Link key={index} href={link.url}  className={`px-2 py-2 text-sm ${link.page === page ? 'bg-green-600 text-white': 'text-r-black'} transition-all hover:font-medium`}>{link.name}</Link>)
      }
      
    </div>

    <header className='hidden bg-red-500 drop-shadow lg:flex lg:bg-white  sm:grid sm:grid-cols-[250px_auto] px-[3%] sm:px-[8%] lg:py-3'>
      <Link href={'/'} className="hidden lg:flex items-center">
        <div className="grid mr-1 w-fit"> <Image src={logo} alt='' className='w-16'/> </div>
        <span className='text-2xl font-extrabold text-r-black'>Green</span>
        <span className='text-2xl font-extrabold text-green-400'>Plate</span>
      </Link>
      {
        isIntact ? 
          <div className="hidden lg:flex w-full justify-end">
            <Link href={''} 
              className={`px-4 rounded py-3 text-sm text-r-black cursor-pointer`}>My Reservations</Link>
            <Link href={'logout'} 
              className={`px-4 rounded py-3 text-sm font-medium bg-red-600 cursor-pointer text-white ml-2`}>Logout</Link>
          </div>
          :
          <div className="hidden lg:flex w-full justify-end">
            <span className={`px-4 rounded py-3 text-sm text-r-black cursor-pointer`}
              onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.LOGIN})}
              >Sign in</span>
            <span className={`px-4 rounded py-3 text-sm font-medium bg-r-black cursor-pointer text-white ml-2`}
              onClick={ e => dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.REGISTER})}
            >Sign up</span>
          </div>
      }
    </header>
  
    <Head>
      <title>{title}</title>
    </Head>
    </>
  )
}

Header.defaultProps = {title: "GreenPlate - Restaurant Reservation System."}
export default Header;

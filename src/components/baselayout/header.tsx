import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "/public/images/logo.svg"


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
      <div className="hidden sm:flex w-full justify-end">
        <span className={`px-3 rounded py-1 text-sm text-white`}>Sign in</span>
        <span className={`px-3 rounded py-1 text-sm font-medium bg-white text-r-black ml-2`}>Sign up</span>
        
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

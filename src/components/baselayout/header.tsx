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
    {url: '/explore', name: 'Explore'},
    {url: '/partner/signin', name: 'Sign in'},
    {url: '/partner/signup', name: 'Sign up'},
  ]
  
  return (
    
    <>

    <header className=' bg-black flex flex-col sm:grid sm:grid-cols-[250px_auto] px-[3%] sm:px-[8%] py-4'>
      <Link href={'/'} className="flex items-center">
        <div className="grid mr-1"> <Image src={logo} alt=''/> </div>
        <span className='text-2xl font-extrabold text-gray-100'>Green</span>
        <span className='text-2xl font-extrabold text-green-400'>Plate</span>
      </Link>
      <div className="hidden sm:flex w-full justify-end">
        {
          navLinks.map((linq, index) => <Link key={index} href={linq.url} 
            className={`px-4 rounded py-2 font-medium ${index == 2 ? 'bg-white text-black ml-2' : 'text-white'}`}>{linq.name}</Link>)
        }
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

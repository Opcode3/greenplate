import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from "/public/images/logo.svg"
import Head from 'next/head'

type AdminLayoutProps = {
    children: React.ReactNode,
    activePage?: number,
}
const AdminLayout = ({children, activePage}: AdminLayoutProps) => {
  return (
    <div className='w-full h-screen grid grid-cols-[270px_auto]  bg-white'>
      <aside className='bg-r-black hidden lg:block'>
        <Link href={'/admin'} className="flex items-center pt-14 pb-3 px-4">
          <div className="grid mr-1 h-20 w-20 relative"> 
            <Image fill style={{objectFit: 'contain', objectPosition: '50% 50%'}} src={logo} alt=''/> 
          </div>
          <span className='text-2xl font-extrabold text-gray-100'>Green</span>
          <span className='text-2xl font-extrabold text-green-400'>Plate</span>
        </Link>

        <Head>
          <title>Adminstrator - GreenPlate RRS</title>
        </Head>

        <ul>
          <li>
            <Link href={'/admin/'} className='flex items-center gap-2 px-4 py-3 text-white hover:text-r-black hover:bg-gray-300 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href={'/admin/restaurants'} className='flex items-center gap-2 px-4 py-3 text-white hover:text-r-black hover:bg-gray-300 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <span>Manage Restaurant</span>
            </Link>
          </li>
          <li>
            <Link href={'/admin/users'} className='flex items-center gap-2 px-4 py-3 text-white hover:text-r-black hover:bg-gray-300 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span>Manage Users</span>
            </Link>
          </li>
          <li>
            <Link href={'/admin/complaints'} className='flex items-center gap-2 px-4 py-3 text-white hover:text-r-black hover:bg-gray-300 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span> Manage Complaints </span>
            </Link>
          </li>
          <li>
            <Link href={'/admin/logout'} className='flex items-center gap-2 px-4 py-3 bg-red-600 text-white hover:text-red-100 hover:bg-red-500 transition-all'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
              </svg>
              <span> Logout </span>
            </Link>
          </li>

        </ul>
      </aside>
      <main className='hidden lg:block px-4'>
        {children}
      </main>
      <div className="flex items-center justify-center w-full h-screen col-span-2 lg:hidden text-r-black text-center px-4">This application has no mobile view interface. <br /> Please use a device of some screen width greater than 1023 pixels. </div>
    </div>
  )
}

export default AdminLayout
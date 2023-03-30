import LogoBlack from '@/components/icons/logoblack'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import admin_profile from '/public/images/admin_profile.png';
import NotificationIcon from '@/components/icons/notificationIcon'
import MessageIcon from '@/components/icons/messageIcon'
import SearchMenu from '@/components/admins/searchMenu'

type AdminLayoutProps = {
    children: React.ReactNode
    activePage?: number,
    disableNav?: boolean
}
const AdminLayout = ({children, activePage, disableNav}: AdminLayoutProps) => {

  const dashboardUrls = [
    {url: '', placeholder: 'Posts', id: 10},
    {url: 'comments', placeholder: 'Comments', id: 11},
    {url: 'categories', placeholder: 'Categories', id: 12},
    {url: 'writers', placeholder: 'Writers', id: 13},
  ]

  const [active, setActive] = React.useState<number | undefined>()

  React.useEffect(() => {
    setActive(activePage)
  },[activePage])



  return (
    <div className=' bg-[#F5F3F3] h-screen'>
      <header className="bg-white w-full shadow h-16 hidden lg:flex items-center px-10 justify-between">
        <div className="w-[180px] "><LogoBlack /></div>
        <SearchMenu />
        <ul className="flex items-center gap-6">
          <li> <div className=""><MessageIcon /></div></li>
          <li> <div className=""><NotificationIcon /></div> </li>
          <li> <div className="rounded-full overflow-hidden w-10 h-10"><Image  src={admin_profile} alt=''/></div></li>
        </ul>
      </header>
      <Head>
        <title>Prazzle Inc - Administrative end</title>
      </Head>
      <main className={`w-full hidden lg:grid ${disableNav ? 'grid-cols-1':'grid-cols-[280px_auto]'} `}>
        <aside className={`bg-prazzle-black h-[calc(100vh-64px)] ${disableNav ? 'hidden':'block'}`}>
          <ul className='py-5 pl-10 pr-1'>
            <li className='p-0'><Link href={'/admin/'} className={`text-prazzle-gray text-2xl block py-2 font-medium ${active==0 || active==1 ? 'text-white': ''}`}>Dashboard</Link></li>
            <li className='p-0'>
              <span 
                className={`text-prazzle-gray text-2xl block py-2 font-medium ${active != 0 ? 'text-white': ''}`}
                onClick={e => setActive(1)}>Blog</span>
              <ul className={`m-0 p-0 ml-3 ${active != 0 ? 'block': 'hidden'}`}>
                {
                  dashboardUrls.map(url => <li key={url.id}>
                      <Link href={`/admin/blog/${url.url}`} className={`text-prazzle-gray text-2xl py-2 block font-medium ${url.id == active ? 'text-white': ''}`}>{url.placeholder}</Link>
                    </li>)
                }
              </ul>
            </li>
          </ul>
        </aside>
        <div className="px-5 py-2 h-[calc(100vh-64px)] overflow-hidden overflow-y-auto pb-8">
          {children}
        </div>
      </main>
      <div className="flex justify-center items-center h-screen text-lg md:text-2xl w-full text-prazzle-gray px-3 text-center lg:hidden">No mobile screen has been implemented for admin end.</div>
    </div>

  )
}

AdminLayout.defaultProps = {active: 0, disableNav: false}

export default AdminLayout
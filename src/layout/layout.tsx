import Footer from '@/components/baselayout/footer'
import Header from '@/components/baselayout/header'
import LoginModal from '@/components/modal/login'
import RegisterModal from '@/components/modal/register'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode,
    title?: string
}

const Layout = ({children, title}: LayoutProps) => {
  return (
    <>
        <Header title={title} />
        <main className=' min-h-[82vh] w-full'>
          {children}
        </main>
        <Footer />

        {/* <LoginModal /> */}
        {/* <RegisterModal /> */}
    </>
  )
}
Layout.defaultProps = { title: "Green Plate, Inc."}
export default Layout;

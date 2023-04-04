import Footer from '@/components/baselayout/footer'
import Header from '@/components/baselayout/header'
import LoginModal from '@/components/modal/login'
import RegisterModal from '@/components/modal/register'
import { UseStore } from '@/hooks/context'
import { MODAL_COMPONENT } from '@/hooks/states'
import React, { useEffect, useState } from 'react'

type LayoutProps = {
    children: React.ReactNode,
    title?: string,
    page?: string,
}

const Layout = ({children, title, page}: LayoutProps) => {

  const {state, dispatch} = UseStore();
  
  return (
    // <StoreProvider>
        <>
          <Header title={title} page={page != undefined ? page : ''} />
          <main className=' min-h-[82vh] w-full hidden lg:block'>
            {children}
          </main>
          <div className="flex items-center justify-center w-full h-screen col-span-2 lg:hidden text-r-black text-center px-4">This application has no mobile view interface. <br /> Please use a device of some screen width greater than 1023 pixels. </div>

          <Footer />

          {

            state.modal_visibility && state.modal_type !== MODAL_COMPONENT.EMPTY ? <>
              { state.modal_type === MODAL_COMPONENT.LOGIN ? <LoginModal /> : <RegisterModal /> } </> : ''
          }
          
        </>
  )
}
Layout.defaultProps = { title: "Green Plate, Inc.", page: ''}
export default Layout;

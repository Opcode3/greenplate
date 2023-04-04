import Footer from '@/components/baselayout/footer'
import Header from '@/components/baselayout/header'
import LoginModal from '@/components/modal/login'
import RegisterModal from '@/components/modal/register'
import { UseStore } from '@/hooks/context'
import { MODAL_COMPONENT } from '@/hooks/states'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode,
    title?: string
}

const Layout = ({children, title}: LayoutProps) => {

  const {state, dispatch} = UseStore();
  return (
    // <StoreProvider>
        <>
          <Header title={title} />
          <main className=' min-h-[82vh] w-full'>
            {children}
          </main>
          <Footer />

          {

            state.modal_visibility && state.modal_type !== MODAL_COMPONENT.EMPTY ? <>
              { state.modal_type === MODAL_COMPONENT.LOGIN ? <LoginModal /> : <RegisterModal /> } </> : ''
          }
          
        </>
  )
}
Layout.defaultProps = { title: "Green Plate, Inc."}
export default Layout;

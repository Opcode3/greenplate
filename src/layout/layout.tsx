import Footer from '@/components/baselayout/footer'
import Header from '@/components/baselayout/header'
import React from 'react'

type LayoutProps = {
    children: React.ReactNode,
    title?: string
}

const Layout = ({children, title}: LayoutProps) => {
  return (
    <div>
        <Header title={title} />
        <main className=' min-h-[84vh] w-full'>
          {children}
        </main>
        <Footer />
    </div>
  )
}
Layout.defaultProps = { title: "Green Plate, Inc."}
export default Layout;

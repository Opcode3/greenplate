
import PageHeader from '@/components/admins/header'
import Table from '@/components/admins/table'
import AdminLayout from '@/layout/adminLayout'
import React from 'react'

const DashboardPage = () => {
  const usersHead = ['sn', 'fullname', 'email', 'address', 'date_created']
  const usersBody = [
    {name: 'Emeka Joseph', email:'opcode3@gmail.com', address:'Akz 212, uka street, Nigeria.', createdAt:'10/10/2010'},
    {name: 'Emeka Joseph', email:'opcode3@gmail.com', address:'Akz 212, uka street, Nigeria.', createdAt:'10/10/2010'},
    {name: 'Emeka Joseph', email:'opcode3@gmail.com', address:'Akz 212, uka street, Nigeria.', createdAt:'10/10/2010'},
    {name: 'Emeka Joseph', email:'opcode3@gmail.com', address:'Akz 212, uka street, Nigeria.', createdAt:'10/10/2010'},
    {name: 'Emeka Joseph', email:'opcode3@gmail.com', address:'Akz 212, uka street, Nigeria.', createdAt:'10/10/2010'},
  ]

  const formattedBody = usersBody.map((td,id) => {
    return (<div key={id} className={`grid grid-cols-[50px_120px_230px_300px_130px] xl:grid-cols-[50px_190px_290px_300px_170px border-t  border-gray-100 hover:bg-gray-100 gap-2 px-2 py-3 transition-all rounded`}>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={''+id}>{id+1}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.name}>{td.name}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.email}>{td.email}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.address}>{td.address}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.createdAt}>{td.createdAt}</span>
    </div>)
})
  return (
    <AdminLayout activePage={0}>
        <div>
          <PageHeader title='Customers List' />
          <Table head={usersHead} body={formattedBody} columnClass='grid-cols-[50px_120px_230px_300px_130px] xl:grid-cols-[50px_190px_290px_300px_170px]'  />
        </div>
    </AdminLayout>
  )
}

export default DashboardPage
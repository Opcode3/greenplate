
import PageHeader from '@/components/admins/header'
import Table from '@/components/admins/table'
import AdminLayout from '@/layout/adminLayout'
import React from 'react'

const DashboardPage = () => {
  const usersHead = ['sn', 'Name', 'Rest. Id', 'Email', 'Location', 'Rating', 'date_created']
  const usersBody = [
    {
      id: '9023', name: 'KFC Restaurant', bgUrl:'', location: 'Nil', description: '', createdAt:'10/10/2010',
      rating: 2, googleMapUrl: '', contact: '09093884994, 08984894883, 039839494', email: 'kfcResturant@greenplate.com',
    },
    {
      id: '9023', name: 'KFC Restaurant', bgUrl:'', location: 'Nil', description: '', createdAt:'10/10/2010',
      rating: 2, googleMapUrl: '', contact: '09093884994, 08984894883, 039839494', email: 'kfcResturant@greenplate.com',
    },
    {
      id: '9023', name: 'KFC Restaurant', bgUrl:'', location: 'Nil', description: '', createdAt:'10/10/2010',
      rating: 2, googleMapUrl: '', contact: '09093884994, 08984894883, 039839494', email: 'kfcResturant@greenplate.com',
    },
    {
      id: '9023', name: 'KFC Restaurant', bgUrl:'', location: 'Nil', description: '', createdAt:'10/10/2010',
      rating: 2, googleMapUrl: '', contact: '09093884994, 08984894883, 039839494', email: 'kfcResturant@greenplate.com',
    },
  ]

  const formattedBody = usersBody.map((td,id) => {
    return (<div key={id} className={`grid grid-cols-[50px_150px_80px_280px_300px_100px_150px] border-t  border-gray-100 hover:bg-gray-100 gap-2 px-2 py-3 transition-all rounded`}>
        <span className='text-base text-gray-800 block text-ellipsis overflow-hidden' title={''+id}>{id+1}</span>
        <span className='text-base text-gray-800 block text-ellipsis overflow-hidden' title={td.name}>{td.name}</span>
        <span className='text-base text-gray-800 block text-ellipsis overflow-hidden' title={td.id}>{td.id}</span>
        <span className='text-base text-gray-800 block text-ellipsis overflow-hidden' title={td.email}>{td.email}</span>
        <span className='text-base text-gray-800 block text-ellipsis overflow-hidden' title={td.location}>{td.location}</span>
        <span className='text-base text-gray-800 block text-ellipsis overflow-hidden' title={''+td.rating}>{td.rating}</span>
        <span className='text-base text-gray-800 block text-ellipsis overflow-hidden' title={td.createdAt}>{td.createdAt}</span>
    </div>)
})
  return (
    <AdminLayout activePage={1}>
        <div>
          <PageHeader title='Restaurants List' />
          <Table head={usersHead} body={formattedBody} columnClass=' grid-cols-[50px_150px_80px_280px_300px_100px_150px] '  />
        </div>
    </AdminLayout>
  )
}

export default DashboardPage
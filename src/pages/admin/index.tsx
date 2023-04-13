
import AdminLayout from '@/layout/adminLayout'
import PageHeader from '@/components/admins/header'
import Statistic from '@/components/partner/statistic'
import React from 'react'
import Table from '@/components/admins/table'


const DashboardPage = () => {
  const statisticsData = [
    {name: 'Total Reservation', value: 2},
    {name: 'Available Meals', value: 2649},
    {name: 'Available Table', value: 92},
    {name: 'Complaints', value: 0},
  ];


  const partnerHead = ['Sn', 'Meal', 'Order Id', 'Cost', 'Paid', '']
  const partnerBody = [
    {name: 'Fried Chicken and Chips', orderId: '636D52', price:4300, paid: 4000},
  ]

  const formattedBody = partnerBody.map((td,id) => {
    return (<div key={id} className={`grid grid-cols-[50px_minmax(170px,auto)_200px_70px_70px_60px] border-t  border-gray-100 hover:bg-gray-100 gap-2 px-2 py-3 transition-all rounded`}>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={''+id}>{id+1}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.name}>{td.name}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.orderId}>{td.orderId}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={'N'+td.price}>{'N'+td.price}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={'N'+td.paid}>{'N'+td.paid}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title='view more details'><ViewIcon /></span>        
    </div>)
})

  return (
    <AdminLayout activePage={0} >
      <div className="">
        <PageHeader title='Restaurants List' />
        <div className="">
          <Statistic data={statisticsData}/>
          <div className='mt-8 flex flex-col gap-2'>
            <h3 className='text-2xl font-semibold text-r-black'>Newest Orders</h3>
            <Table head={partnerHead} body={formattedBody} columnClass='grid-cols-[50px_minmax(170px,auto)_200px_70px_70px_60px]' />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default DashboardPage
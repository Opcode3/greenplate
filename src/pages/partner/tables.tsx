import Table from '@/components/admins/table'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import PartnerPageHeader from '@/components/partner/header'
import PartnerLayout from '@/layout/partnerLayout'
import React from 'react'

const PartnerTablePage = (): JSX.Element => {

  const partnerHead = ['Sn', 'Meal', 'Order Id', 'Order Email', 'Cost', 'Paid', 'Date Created']
  const partnerBody = [
    {name: 'Fried Chicken and Chips', orderId: '636D52', email:'opcode3@gmail.com', price:4300, paid: 4000, createdAt:'10/10/2010'},
  ]

  const formattedBody = partnerBody.map((td,id) => {
    return (<div key={id} className={`grid grid-cols-[50px_minmax(140px,auto)_120px_220px_70px_70px_130px] border-t  border-gray-100 hover:bg-gray-100 gap-2 px-2 py-3 transition-all rounded`}>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={''+id}>{id+1}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.name}>{td.name}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.orderId}>{td.orderId}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.email}>{td.email}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={'N'+td.price}>{'N'+td.price}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={'N'+td.paid}>{'N'+td.paid}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.createdAt}>{td.createdAt}</span>
    </div>)
})

  return (
    <PartnerLayout activePage={1}>
      <div className="">
        <PartnerPageHeader title='Manage Tables' />
        <div className="">
          <Link href={''}><Button onClick={e=> {}} value='Add New Table' classname='max-w-fit px-6 rounded-full' /></Link>
          <div className='mt-8 flex flex-col gap-2'>
            <Table head={partnerHead} body={formattedBody} columnClass='grid-cols-[50px_minmax(140px,auto)_120px_220px_70px_70px_130px]' />
          </div>
        </div>
      </div>
    </PartnerLayout>
  )
}

export default PartnerTablePage

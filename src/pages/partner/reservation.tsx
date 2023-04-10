import Table from '@/components/admins/table'
import Button from '@/components/buttons/button'
import PartnerPageHeader from '@/components/partner/header'
import PartnerLayout from '@/layout/partnerLayout'
import React from 'react'
import Link from 'next/link'
import ViewIcon from '@/components/icons/viewIcon'

const PartnerOrderPage = (): JSX.Element => {

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
    <PartnerLayout activePage={3} title=''>
      <div className="">
        <PartnerPageHeader title='Manage reservation' />
        <div className="">
          <div className=" flex gap-0">
            <Link href={''}><Button onClick={() => {}} value='Newest Reservation' classname='max-w-fit px-6 rounded-l-full' /></Link>
            <Link href={''}><Button onClick={() => {}} value='Accepted Reservation' classname='max-w-fit px-6 rounded-none border-'/></Link>
            <Link href={''}><Button onClick={() => {}} value='Served Reservation' classname='max-w-fit px-6 rounded-r-full' /></Link>
          </div>
          <div className='mt-8 flex flex-col gap-2'>
            <Table head={partnerHead} body={formattedBody} columnClass='grid-cols-[50px_minmax(170px,auto)_200px_70px_70px_60px]' />
          </div>
        </div>
      </div>
    </PartnerLayout>
  )
}

export default PartnerOrderPage
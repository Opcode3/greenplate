import Table from '@/components/admins/table'
import PartnerPageHeader from '@/components/partner/header'
import PartnerLayout from '@/layout/partnerLayout'
import React from 'react'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import InputWithLabel from '@/components/inputs/inputWithLabel'
import TextAreaWithLabel from '@/components/inputs/TextAreaWithLabel'

const PartnerMealPage = (): JSX.Element => {

  const partnerHead = ['Sn', 'Meal', 'Order Id', 'Order Email', 'Cost', 'Paid', 'Date Created']
  const partnerBody = [
    {name: 'Fried Chicken and Chips', orderId: '636D52', email:'opcode3@gmail.com', price:4300, paid: 4000, createdAt:'10/10/2010'},
    {name: 'Fried Chicken and Chips', orderId: '636D52', email:'opcode3@gmail.com', price:4300, paid: 4000, createdAt:'10/10/2010'},
    {name: 'Fried Chicken and Chips', orderId: '636D52', email:'opcode3@gmail.com', price:4300, paid: 4000, createdAt:'10/10/2010'},
    {name: 'Fried Chicken and Chips', orderId: '636D52', email:'opcode3@gmail.com', price:4300, paid: 4000, createdAt:'10/10/2010'},
    {name: 'Fried Chicken and Chips', orderId: '636D52', email:'opcode3@gmail.com', price:4300, paid: 4000, createdAt:'10/10/2010'},
    {name: 'Fried Chicken and Chips', orderId: '636D52', email:'opcode3@gmail.com', price:4300, paid: 4000, createdAt:'10/10/2010'},
  ]

  const formattedBody = partnerBody.map((td,id) => {
    return (<div key={id} className={`grid grid-cols-[50px_auto_120px_220px_70px_70px_130px] border-t  border-gray-100 hover:bg-gray-100 gap-2 px-2 py-3 transition-all rounded`}>
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
    <PartnerLayout activePage={0} title='Setting'>
      <div className="">
        <PartnerPageHeader title='Settings' />
        <div className="">
          <div className='mt-8 flex flex-col gap-2'>
            <div className=" min-h-[400px] mb-8">
              <div className=" bg-gray-100 px-3 w-full py-2 rounded text-r-black font-medium text-2xl">Business Setting</div>
              <form onSubmit={ e => {}} className="w-[96%] mx-auto py-6 flex flex-col gap-3">
                <InputWithLabel label='Business name' onChange={e => {}} />
                <TextAreaWithLabel label='Business description' rows={3} onChange={e => {}} />
                <InputWithLabel label='Phone number(s)' onChange={e => {}} />
                <InputWithLabel label='Location' onChange={e => {}} />
                <InputWithLabel label='Google map url' onChange={e => {}} />
                <InputWithLabel label='Business Background Image' type='file' onChange={e => {}} />
                <Button onClick={e => {}} value='Update Business Settings' classname='mt-6' />
              </form>
            </div>

            <div className=" min-h-[400px] mb-6">
              <div className=" bg-gray-100 px-3 w-full py-2 rounded text-r-black font-medium text-2xl">Bank Account Setting</div>
              <form onSubmit={ e => {}} className="w-[96%] mx-auto py-6 flex flex-col gap-3">
                <InputWithLabel label='Business account name' onChange={e => {}} />
                <InputWithLabel label='Business account number' onChange={e => {}} />
                <InputWithLabel label='Business bank' onChange={e => {}} />
                <Button onClick={e => {}} value='Update Business Settings' classname='mt-6' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </PartnerLayout>
  )
}

export default PartnerMealPage
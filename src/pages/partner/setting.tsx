import Table from '@/components/admins/table'
import PartnerPageHeader from '@/components/partner/header'
import PartnerLayout from '@/layout/partnerLayout'
import React from 'react'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import InputWithLabel from '@/components/inputs/inputWithLabel'
import TextAreaWithLabel from '@/components/inputs/TextAreaWithLabel'

const PartnerMealPage = (): JSX.Element => {


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
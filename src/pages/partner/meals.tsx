import Table from '@/components/admins/table'
import PartnerPageHeader from '@/components/partner/header'
import PartnerLayout from '@/layout/partnerLayout'
import React, { FormEvent } from 'react'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import DeleteIcon from '@/components/icons/deleteIcon'
import EditIcon from '@/components/icons/editIcon'
import { UseStore } from '@/hooks/context'
import { MODAL_COMPONENT } from '@/hooks/states'
import { REDUCER_ACTION } from '@/hooks/actions'
import ModalLayout from '@/layout/modalLayout'
import InputWithLabel from '@/components/inputs/inputWithLabel'


const PartnerMealPage = (): JSX.Element => {
  const {state, dispatch} = UseStore();


  const partnerHead = ['Sn', 'Meal', 'Cost', 'Date Created','','']
  const partnerBody = [
    {name: 'Fried Chicken and Chips', price:4300, createdAt:'10/10/2010'},
  ]

  const formattedBody = partnerBody.map((td,id) => {
    return (<div key={id} className={`grid grid-cols-[50px_minmax(170px,auto)_80px_170px_60px_60px] border-t  border-gray-100 hover:bg-gray-100 gap-2 px-2 py-3 transition-all rounded`}>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={''+id}>{id+1}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.name}>{td.name}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={'N'+td.price}>{'N'+td.price}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.createdAt}>{td.createdAt}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title='edit meal'><EditIcon /></span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title='delete meal'><DeleteIcon /></span>
    </div>)
})


const newMealHandler = (e: FormEvent) => {
  e.preventDefault();
}

  return (
    <>
    <PartnerLayout activePage={2} title=''>
      <div className="">
        <PartnerPageHeader title='Manage meals' />
        <div className="">
          <div className=" flex gap-0">
            <Link href={''}><Button onClick={ () => dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.CREATE_MEAL})} value='Add New Meal' classname='max-w-fit px-6 rounded-l-full rounded-r-full' /></Link>
          </div>
          <div className='mt-8 flex flex-col gap-2'>
            <Table head={partnerHead} body={formattedBody} columnClass='grid-cols-[50px_minmax(170px,auto)_80px_170px_60px_60px]' />
          </div>
        </div>
      </div>
    </PartnerLayout>
    {
      state.modal_visibility && state.modal_type === MODAL_COMPONENT.CREATE_MEAL 
      ?
      <ModalLayout>
        <div className=" bg-white rounded w-[500px] py-5 px-4">
          <h2 className='text-5xl text-r-black mb-8'>New Meal Form</h2>
          <form onSubmit={e => newMealHandler(e)} className='flex flex-col gap-4'>
            <InputWithLabel label='Name' onChange={value => {}} />
            <Button value='Add Meal' onClick={() => {}} />
          </form>
        </div>
      </ModalLayout>
     : ''
}
</>
  )
}

export default PartnerMealPage
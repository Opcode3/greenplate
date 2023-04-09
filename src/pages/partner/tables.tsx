import Table from '@/components/admins/table'
import Button from '@/components/buttons/button'
import Link from 'next/link'
import PartnerPageHeader from '@/components/partner/header'
import PartnerLayout from '@/layout/partnerLayout'
import React, { FormEvent, useState } from 'react'
import ModalLayout from '@/layout/modalLayout'
import InputWithLabel from '@/components/inputs/inputWithLabel'
import { UseStore } from '@/hooks/context'
import { MODAL_COMPONENT } from '@/hooks/states'
import { REDUCER_ACTION } from '@/hooks/actions'
import DeleteIcon from '@/components/icons/deleteIcon'
import EditIcon from '@/components/icons/editIcon'

const PartnerTablePage = (): JSX.Element => {

  const [tableName, setTableName] = useState<string>('');
  const {state, dispatch} = UseStore();

  const partnerHead = ['Sn', 'Table Id', 'Date Created', '', '']
  const partnerBody = [
    {number: '003', createdAt:'10/10/2010'},
  ]

  const formattedBody = partnerBody.map((td,id) => {
    return (<div key={id} className={`grid grid-cols-[50px_minmax(140px,auto)_180px_60px_60px] border-t  border-gray-100 hover:bg-gray-100 gap-2 px-2 py-3 transition-all rounded`}>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={''+id}>{id+1}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.number}>{td.number}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title={td.createdAt}>{td.createdAt}</span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title='edit table'><EditIcon /></span>
        <span className='text-base capitalize text-gray-800 block text-ellipsis overflow-hidden' title='delete table'> <DeleteIcon /></span>
    </div>)
})

// console.log(state)


const newTableHandler = (e: FormEvent) => {
  e.preventDefault();
  const tableData = {tableName}
  console.log(tableData);
}

  return (
    <>
      <PartnerLayout activePage={1}>
        <div className="">
          <PartnerPageHeader title='Manage Tables' />
          <div className="">
            <div className="">
              <Button onClick={ () => dispatch({type: REDUCER_ACTION.MODAL_VISIBILITY_TOGGLE, payload: MODAL_COMPONENT.CREATE_TABLE})} value='Add New Table' classname='max-w-fit px-6 rounded-l-full rounded-r-full' />
            </div>
            <div className='mt-8 flex flex-col gap-2'>
              <Table head={partnerHead} body={formattedBody} columnClass='grid-cols-[50px_minmax(140px,auto)_180px_60px_60px]' />
            </div>
          </div>
        </div>
      </PartnerLayout>

      {
      state.modal_visibility && state.modal_type === MODAL_COMPONENT.CREATE_TABLE 
      ?
      <ModalLayout>
        <div className=" bg-white rounded w-[500px] py-5 px-4">
          <h2 className='text-5xl text-r-black mb-8'>New Table Form</h2>
          <form onSubmit={e => newTableHandler(e)} className='flex flex-col gap-4'>
            <InputWithLabel label='Table number' onChange={value => setTableName(value)} />
            <Button value='Add Table' onClick={() => {}} />
          </form>
        </div>
      </ModalLayout>
     : ''
}
    </>
  )
}

export default PartnerTablePage

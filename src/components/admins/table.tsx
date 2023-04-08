import React from 'react'

type userType = {
    name: string
    email: string
    address: string
    createdAt: string
}
type TableProps = {
    body: JSX.Element[],
    head: string[]
    columnClass: string
}
const Table = ({head, body, columnClass}: TableProps) => {
  return (
    <div className='bg-gray-100 rounded-lg overflow-hidden my-4 w-full overflow-x-auto'>
        <div className={`grid ${columnClass} gap-2 bg-gray-100 py-4 px-2`}>
            {
                head.map(hd => <span className='uppercase block font-semibold'>{hd}</span>)
            }
        </div>
        <div className={` bg-white min-w-fit w-full`}>
            { body}
        </div>
    </div>
  )
}

export default Table
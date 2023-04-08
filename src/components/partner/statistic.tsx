import React from 'react'

type StatisticsProps = {
    name: string,
    value: number
}
const Statistic = ({data}: {data: StatisticsProps[]}) => {
  return (
    <div className='py-3 w-full grid grid-cols-4 gap-4'>
        {
            data.map((item, index) => 
                <div className=" flex flex-col border border-r-black rounded overflow-hidden" key={index}>
                    <strong className='text-5xl text-r-black h-32 flex items-center justify-center py-3 px-2 text-center'>{Intl.NumberFormat('en').format(item.value)}</strong>
                    <span className='text-xl text-r-black py-2 border-t text-center border-r-black block'>{item.name}</span>
                </div>
            )
        }
    </div>
  )
}

export default Statistic
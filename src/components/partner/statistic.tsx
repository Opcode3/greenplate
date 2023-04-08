import React from 'react'

type StatisticsProps = {
    name: string,
    value: number
}
const Statistic = ({data}: {data: StatisticsProps[]}) => {
  return (
    <div className='py-3 w-full grid grid-cols-4 gap-3'>
        {
            data.map((item, index) => 
                <div className=" flex flex-col border border-r-black rounded overflow-hidden" key={index}>
                    <strong className='text-9xl text-r-black py-3 px-2 text-center'>{item.value}</strong>
                    <span className='text-2xl text-r-black border-t text-center border-r-black block'>{item.name}</span>
                </div>
            )
        }
    </div>
  )
}

export default Statistic
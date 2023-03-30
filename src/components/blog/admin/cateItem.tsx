import Image from 'next/image'
import React from 'react'
import icon_post from '/public/images/blog/category.png'
import More from '@/components/icons/more'
import Link from 'next/link'
import DeleteIcon from '@/components/icons/deleteIcon'




type CategoryItemProps = {
  index: number,
  first?: boolean,
  activeIndex: number|null,
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>,
  data?: {}[]
}

const CateItem = ({data, first, index, activeIndex, setActiveIndex}: CategoryItemProps) => {
  const handleContextualMenu = () => {
    if(index === activeIndex){
      setActiveIndex(null)
    }
  }
  return (
    <section onMouseLeave={e => handleContextualMenu()}  className={`grid grid-cols-[auto_90px_130px_100px] w-[98%] relative mx-auto h-20 ${!first ? 'border-t border-prazzle-black' : ''}`}>
        <div className="flex justify-start items-center pl-2 gap-2">
            <div className=" w-14 h-14 relative">
                <Image src={icon_post} fill alt='icon blog title here' style={{objectFit: 'contain', objectPosition: '50% 50%'}}/>
            </div>
            <p className='text-2xl font-medium'>Fashion and Beauty</p>
        </div>
        <div className="flex justify-start items-center pl-2 text-2xl font-medium">20</div>
        <div className="flex justify-center items-center pl-2">
          <Link href={''} className='w-fit border rounded-full px-4 py-1'>Edit</Link>
        </div>
        <div className="flex justify-start items-center pl-2">
          <span className='' onClick={e => setActiveIndex(index)}>
            <More />
          </span>
        </div>
        <ul 
            className={`${activeIndex && activeIndex === index ? 'flex' : 'hidden' } bg-white py-2 shadow-lg
              rounded-lg flex-col absolute top-12 right-10 z-10 `}
        >
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 pl-3 pr-5 py-2'> <DeleteIcon /> <span>Delete</span></li>
          </ul>
    </section>
  )
}
CateItem.defaultProps = { first: false}
export default CateItem
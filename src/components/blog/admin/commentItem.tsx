












import React from 'react'
import More from '@/components/icons/more'
import DeleteIcon from '@/components/icons/deleteIcon'




type CommentItemProps = {
  index: number,
  first?: boolean,
  activeIndex: number|null,
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>,
  data?: {}[]
}

const CommentItem = ({data, first, index, activeIndex, setActiveIndex} : CommentItemProps ) => {
  const handleContextualMenu = () => {
    if(index === activeIndex){
      setActiveIndex(null)
    }
  }
  return (
    <section onMouseLeave={e => handleContextualMenu()} className={`grid grid-cols-[auto_150px_230px] py-4 w-full relative mx-auto ${!first ? 'border-t border-prazzle-black' : ''}`}>
        <div className="flex flex-col justify-center pl-8 gap-1">
          <p className='m-0 p-0'>Post:Stretch Marks are Beautiful! But Here are 5 Ways to Prevent them </p>
          <div className=" flex items-center gap-1"> 
            <span className=' inline-block w-4 h-4 bg-prazzle-yellow rounded-full'></span> 
            <b className='text-[#333] font-medium text-base'>Guest</b> 
          </div>  
          <p className='text-lg font-medium m-0 p-0 text-[#333]'>Nice write up, Good work here.</p>
        </div>
        <div className="flex justify-start items-center pl-2 text-sm font-medium">March.23.2021</div>
        <div className="flex justify-end items-center pl-2 pr-8">
          <span className='' onClick={e => setActiveIndex(index)}>
            <More />
          </span>
        </div>
        {/* <div className="flex justify-end items-center pl-2 pr-3"><More /></div> */}

        <ul 
            className={`${activeIndex && activeIndex === index ? 'flex' : 'hidden' } bg-white py-2 shadow-lg
              rounded-lg flex-col absolute top-12 right-10 z-10 `}
        >
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 pl-3 pr-5 py-2'> <DeleteIcon /> <span>Delete comment</span></li>
          </ul>
    </section>
  )
}
CommentItem.defaultProps = { first: false}
{/* <div className=" col-span-3 text-xl font-medium flex items-center"> No comment was found!</div> */}
export default CommentItem



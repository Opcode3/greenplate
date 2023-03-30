import Image from 'next/image'
import React from 'react'
import icon_post from '/public/images/blog/icon_post.png'
import More from '@/components/icons/more'
import ShareIcon from '@/components/icons/shareIcon'
import ViewIcon from '@/components/icons/viewIcon'
import DeleteIcon from '@/components/icons/deleteIcon'
import DuplicateIcon from '@/components/icons/duplicateIcon'

type PostItemProps = {
  index: number,
  first?: boolean,
  activeIndex: number|null,
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>,
  data?: {}[]
}

const PostItem = ({data, first, index, activeIndex, setActiveIndex}: PostItemProps) => {

  const handleContextualMenu = () => {
    if(index === activeIndex){
      setActiveIndex(null)
    }
  }
  return (
    <section onMouseLeave={e => handleContextualMenu()} className={`grid grid-cols-[auto_200px_80px_60px] w-[98%] relative mx-auto h-20 ${!first ? 'border-t border-prazzle-black' : ''}`}>
        <div className="flex justify-start items-center pl-2 gap-2">
            <div className=" w-14 h-14 relative">
                <Image src={icon_post} fill alt='icon blog title here' style={{objectFit: 'contain', objectPosition: '50% 50%'}}/>
            </div>
            <p className='font-medium text-base'> Stretch Marks are Beautiful! But Here are 5 Ways to Prevent them</p>
        </div>
        <div className="flex justify-start items-center pl-2">March,13,2023</div>
        <div className="flex justify-center items-center pl-2">20</div>
        <div className="flex justify-start items-center pl-2 relative">
          <span className='' onClick={e => setActiveIndex(index)}>
            <More />
          </span>
        </div>
        <ul 
            className={`${activeIndex && activeIndex === index ? 'flex' : 'hidden' } bg-white py-2 shadow-lg
              rounded-lg flex-col absolute top-12 right-10 z-10 `}
        >
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 pl-3 pr-5 py-2'> <ViewIcon/> <span>View post</span></li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 pl-3 pr-5 py-2'> <ShareIcon /> <span>Share post</span></li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 pl-3 pr-5 py-2'> <DeleteIcon /> <span>Move to trash</span></li>
            <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 pl-3 pr-5 py-2'> <DuplicateIcon /> <span>Duplicate post</span></li>
          </ul>
    </section>
  )
}
PostItem.defaultProps = { first: false}
export default PostItem
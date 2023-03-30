import React from 'react'
import PostItem from './postItem'
import Button from '../buttons/button'

const BlogPosts = () => {
  return (
    <div className=' max-w-[92%] w-[480px] sm:w-[1280px] sm:max-w-[90%] mx-auto mt-5'>
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-x-3 gap-y-6">
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
            <PostItem id='58758584845995'/>
        </div>
        <div className="w-[120px] mx-auto mt-16">
          <Button value='Load More' classname='w-fit' onClick={e => {}}/>
        </div>
    </div>

  )
}

export default BlogPosts
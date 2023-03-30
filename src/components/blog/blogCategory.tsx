import Link from 'next/link'
import React from 'react'

const BlogCategoryTab = () => {
    const urls:{url: string, text: string}[] = [
        {url: "", text: "All"},
        {url: "", text: "Spotlight"},
        {url: "", text: "Arts and Visual"},
        {url: "", text: "Fashion and Beauty"},
        {url: "", text: "Photography and Film"},
        {url: "", text: "Tips/Guides"},
      ]
  return (
    <div className='hidden md:block'>
      <ul className='hidden md:flex gap-4 bg-[#F3F3F3] justify-center h-20 items-center'>
        {
          urls.map((item, index) => <li key={index}><Link href={item.url} className='text-prazzle-gray text-sm'>{item.text}</Link></li> )
        }
      </ul> 
    </div>
  )
}

export default BlogCategoryTab
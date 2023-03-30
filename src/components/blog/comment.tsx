import React from 'react'
import InputWithLabel from '../inputs/inputWithLabel';
import Button from '../buttons/button';
import TextAreaWithLabel from '../inputs/TextAreaWithLabel';

const Comment = () => {
    const [fullname,setFullname] = React.useState<string | undefined>(undefined)
    const [email,setEmail] = React.useState<string | undefined>(undefined)
    const [link,setLink] = React.useState<string | undefined>(undefined)

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <div className='py-8 md:py-12 lg:py-16 max-w-[94%] sm:max-w-[90%] md:w-[80%] mx-auto'>
      <form action="" className='flex flex-col gap-2 sm:gap-3 lg:gap-5' onSubmit={e => formHandler(e)}>
        <TextAreaWithLabel label='Your email addressed with not be published.' labelStyle='text-prazzle-gray' onChange={e => {}} />
        <div className="w-full sm:w-5/6 lg:w-3/6 flex flex-col gap-2 sm:gap-3 lg:gap-5">
            <InputWithLabel label='Fullname' value={fullname} onChange={e=> setFullname(e.target.value)} />
            <InputWithLabel type='email' value={email} label='Email address' onChange={e=> setEmail(e.target.value)} />
            <InputWithLabel label='Website link' value={link} onChange={e=> setLink(e.target.value)} />
        </div>
        <div className=" w-full sm:w-[200px] mt-4 md:mt-6">
            <Button value='Post Comment' onClick={e => {}} />
        </div>
      </form>
    </div>
  )
}

export default Comment

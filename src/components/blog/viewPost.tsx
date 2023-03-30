import React from 'react'
import image0 from '/public/images/blog/blog_0.jpg'
import image1 from '/public/images/blog/blog_1.jpg'
import image2 from '/public/images/blog/blog_2.jpg'
import image3 from '/public/images/blog/blog_3.jpg'
import image4 from '/public/images/blog/blog_4.jpg'
import Image from 'next/image'

const ViewPost = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex w-full flex-col gap-3'>      
            <strong className='uppercase text-prazzle-black text-base md:text-xl lg:text-[28px] font-normal'>PHOTOGRAPHY AND FILM</strong>
            <h3 className='text-prazzle-black text-2xl md:text-4xl lg:text-[48px] leading-tight font-medium'>“How photography became therapeutic and saved me from a sad place”- Ismaila Rufai</h3>
            <div className="flex gap-6">
                <span className='text-lg sm:text-xl lg:text-[28px] text-prazzle-gray'>Edidiong eton</span>
                <span className='text-lg sm:text-xl lg:text-[28px] text-prazzle-gray'>Published on sept 30,2022</span>
            </div>
        </div>
        <div className="">
            <div className="overflow-hidden grid rounded-[20px_20px_0px_0px] w-full relative">
                <Image src={image0} alt='image name' />
            </div>        
        </div>
        <div className="flex flex-col gap-2">
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>Art has always been therapeutic, but only a few discontain it, and it’s often unexpected, but when the discontainy happens, it unleashes an artist from within. One such artist is Ismaila Rufai of Kingsville Visuals.</p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-black pt-4 pb-3'><strong>“Photography started for me as a joke. I didn’t know I’d be doing photography not until after it saved me from a sad place. It shined its light on me in 2018, but I discontained my niche in 2020.”</strong></p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>Ismaila Rufai who created Kingsvillevisuals gallery, is an Abuja-based photographer in Nigeria who enjoys taking pictures of the melanin skin; his work features the inclusivity of people with albinism.</p>
        </div>
        <div className="">
            <div className="overflow-hidden grid rounded-[20px_20px_0px_0px] w-full relative">
                <Image src={image1} alt='image name' />
            </div>        
        </div>
        <div className="flex flex-col gap-2">
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray pt-4 pb-3'><strong>Please introduce us to Kingsville Visuals. What&apos;s your real name, and where are you from?</strong></p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>My name is Ismaila Rufai from Kogi state, which is in middle north Nigeria Ebira by tribe but currently residing in the country capital Abuja.</p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray pt-4 pb-3'><strong>What was the inspiration to venture into photography? When did your sense of artistic appreciation begin?</strong></p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>Well, photography started for me as a joke. I didn’t know I’d be doing photography not until after it saved me from a sad place it shined its light on me in 2018, but I discontained my niche in 2020</p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray pt-4 pb-3'><strong>What&apos;s your favorite creative mood like?</strong></p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>I don’t have a favorite creative mood. I love every bit of my work equally because they all have deep meaning to me.</p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray pt-4 pb-3'><strong>How does your environment influence your art or work?</strong></p>
            <p></p>
        </div>
        <div className="">
            <div className="overflow-hidden grid rounded-[20px_20px_0px_0px] w-full relative">
                <Image src={image2} alt='image name' />
            </div>        
        </div>
        <div className="flex flex-col gap-2">
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>My environment significantly impacts me and my work because of the culture and the people, and it changed my perspective, so I&apos;m putting in the effort to make the best of it.</p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray pt-4 pb-3'><strong>Your works bring about the inclusivity of people with albinism in your works; why&apos;s that? Any particular message you hope to pass to the audience?</strong></p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>Well, we are in a world where racism is a thing, and people perceive others differently, so I include Albinos in my work, just saying my space is welcome to everyone, and if we love ourselves, we will find peace.</p>
        </div>
        <div className="">
            <div className="overflow-hidden grid rounded-[20px_20px_0px_0px] w-full relative">
                <Image src={image3} alt='image name' />
            </div>        
        </div>
        <div className="flex flex-col gap-2">
            <p className='text-xl text-prazzle-gray'>Beauty, in my perspective, is the energy put into things like the process, the execution, and results, even the way we live our lives; beauty is in everything, and I believe everyone is beautiful in their own way.</p>
            <p className='text-xl text-prazzle-gray pt-4 pb-3'><strong>What&apos;s your favorite thing about photographing your melanin skin?</strong></p>
            <p className='text-xl text-prazzle-gray'>Melanin skin glows, so in every scenario, it still comes out great, so yeah, I love the diversity of it.</p>
            <p className='text-xl text-prazzle-gray pt-4 pb-3'><strong>How do you market your art? Where can we find them? Also, what&apos;s the motivation to keep going in Photography?</strong></p>
        </div>

        <div className="">
            <div className="overflow-hidden grid rounded-[20px_20px_0px_0px] w-full relative">
                <Image src={image4} alt='image name' />
            </div>        
        </div>

        <div className="flex flex-col gap-2">
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>JI market my art by selling my prints, and I’m also in the NFT space with the name Kingsville Visuals Gallery on the variable. Well, photography is life to me, so I can’t stop, and I’m always motivated each time I hold my camera.</p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray pt-4 pb-3'><strong>What messages do you have for artists who want to monetize their crafts as you do?</strong></p>
            <p className='text-lg sm:text-xl lg:text-2xl text-prazzle-gray'>I advise them to be genuine in their craft; with that, I believe the right audience will follow through, and marketing their art will be easier.</p>
        </div>
    </div>
  )
}

export default ViewPost


import Layout from "@/layout/layout";
import Image from "next/image";
import bg from '/public/images/restaurant/bg-1.jpg'

export default function Home() {

  return (
    <Layout>
        <div className="">
            <div className=" h-[65vh] overflow-hidden relative">
                <Image src={bg} fill style={{objectFit: 'cover', objectPosition: '50% 50%'}} alt="" />
            </div>
            <div className="w-full min-h-[800px] flex justify-center relative mb-10 -mt-16">
                <div className=" w-10/12 xl:w-8/12 bg-white rounded "></div>
            </div>
        </div>
      {/* <div className="">Landing Page</div> */}
    </Layout>
  )
}

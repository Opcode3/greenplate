
import Layout from "@/layout/layout";
import Image from "next/image";
import Link from "next/link";

export default function PaymentPage() {
  const img = require('/public/images/restaurant/1.jpg')


  return (
    <Layout>
        <div className="">
            <div className="w-full min-h-[400px] flex flex-col gap-6 justify-center items-center relative mb-10 ">
                <div className=" px-6 py-5 border rounded-xl grid gap-4 grid-cols-[130px_auto]">
                  <div className=" w-32 h-32 rounded-full border overflow-hidden relative"> <Image src={img} alt="" fill style={{objectFit: 'cover', objectPosition: '50% 50%'}} /> </div>
                  <div className="">
                    <h2 className="text-3xl font-bold text-r-black">Fried Chicken Soup</h2>
                    <p className="text-r-black text-lg"> <strong>Table No.: </strong> 0093</p>
                    <p className="text-r-black text-lg"> <strong>Reserved By: </strong> 3rd May, 2023 by 10PM to 10:30PM</p>
                    <p className="text-r-black text-lg"> <strong>Meal Price: </strong> ₦ 1400</p>
                  </div>
                </div>
                <div className=" flex flex-col gap-3 items-center justify-center">
                  <p className="w-[500px] mx-auto text-center">
                    To reserve this table, you will be required to make part payment of <em>₦ 700</em>.
                  </p>
                  <Link href={''} className="border bg-green-500 transition hover:bg-green-600 max-w-fit rounded py-2 pt-3 px-4">Make payment using <b>paystack</b> .</Link>
                </div>
            </div>
        </div>
      {/* <div className="">Landing Page</div> */}
    </Layout>
  )
}

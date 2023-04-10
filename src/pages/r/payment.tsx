
import Layout from "@/layout/layout";
import Image from "next/image";
import bg from '/public/images/restaurant/bg-1.jpg'
import SelectWithLabel from "@/components/inputs/selectWithLabel";
import InputWithLabel from "@/components/inputs/inputWithLabel";
import Button from "@/components/buttons/button";
import FoodItem from "@/components/home/foodItem";
import Link from "next/link";

export default function Home() {

  return (
    <Layout>
        <div className="">
            <div className="w-full min-h-[400px] flex justify-center items-center relative mb-10 ">
                <div className="">

                </div>
                <Link href={''} className="border bg-green-500 transition hover:bg-green-600 rounded py-2 pt-3 px-4">Make payment to reserve table using <b>paystack</b> .</Link>
            </div>
        </div>
      {/* <div className="">Landing Page</div> */}
    </Layout>
  )
}

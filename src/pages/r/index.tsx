
import Layout from "@/layout/layout";
import Image from "next/image";
import bg from '/public/images/restaurant/bg-1.jpg'
import SelectWithLabel from "@/components/inputs/selectWithLabel";
import InputWithLabel from "@/components/inputs/inputWithLabel";
import Button from "@/components/buttons/button";
import FoodItem from "@/components/home/foodItem";
import Link from "next/link";

export default function Home() {

  const peoples = [
    {value: '1', type: '1 person'},
    {value: '2', type: '2 people'},
    {value: '3', type: '3 people'},
    {value: '4', type: '4 people'},
    {value: '5', type: '5 people'},
    {value: '6', type: '6 people'},
    {value: '7', type: '7 people'},
    {value: '8', type: '8 people'},
    {value: '9', type: '9 people'},
    {value: '10', type: '10 people'},
    {value: '11', type: '11 people'},
    {value: '12', type: '12 people'},
  ]
  return (
    <Layout>
        <div className="">
            <div className=" h-[65vh] overflow-hidden relative">
                <Image src={bg} fill style={{objectFit: 'cover', objectPosition: '50% 50%'}} alt="" />
                <h1 className="absolute h-full justify-center text-center bg-white font-bold  bg-opacity-60 flex flex-col items-center  text-6xl w-full">
                  KFC Restaurant, Minna
                  <span className="text-lg font-normal w-[650px] max-w-full "> <strong>Address:</strong> Lore aperiam eiuspit nihil velit ipsum soluta esse enim aperia.</span>
                </h1>
            </div>
            <div className="w-full min-h-[400px] flex justify-center relative mb-10 -mt-16">
                <div className=" w-10/12 xl:w-8/12 gap-2 rounded grid grid-cols-[auto_330px] ">
                  <div className=" bg-white px-3 py-3 rounded-t border">
                    <h1 className=" text-gray-500 py-4 border-b px-2 mb-4">Menu List</h1>
                    <div className=" grid grid-cols-3 gap-2">
                      <FoodItem />
                      <FoodItem />
                      <FoodItem />
                      <FoodItem />
                      <FoodItem />
                    </div>
                  </div>
                  <div className=" bg-white border px-3 py-3 rounded-t">
                    <h1 className="text-gray-500 pb-5 text-center">Make a reservation</h1>
                    <form onSubmit={e => {}} className=" mb-6">
                      <SelectWithLabel label="number of people" onChange={ value => {}} data={peoples} />
                      <div className=" grid grid-cols-2 gap-1 mt-4">
                        <InputWithLabel type="date" onChange={value => {}} label="Date" />
                        <InputWithLabel type="time" onChange={value => {}} label="Time" />
                      </div>
                      <Button onClick={e => {}} classname="mt-6" value="Find a time" />
                    </form>

                    <div className="">
                      <h3>Select a time</h3>
                      <div className=" grid grid-cols-3 gap-2 pt-2">
                        <Link href={'/r/payment'} className="bg-green-500 hover:bg-green-300 transition-all rounded text-white font-semibold px-4 py-2">4:50PM*</Link>
                        <Link href={'/r/payment'} className="bg-green-500 hover:bg-green-300 transition-all rounded text-white font-semibold px-4 py-2">4:50PM*</Link>
                        <Link href={'/r/payment'} className="bg-green-500 hover:bg-green-300 transition-all rounded text-white font-semibold px-4 py-2">4:50PM*</Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      {/* <div className="">Landing Page</div> */}
    </Layout>
  )
}

import HomeSearch from "@/components/home/homeSearch";
import RestaurantsHub from "@/components/home/restaurantsHub";
import Layout from "@/layout/layout";

export default function Home() {

  const restaurantLists = [
    {name: 'KFC Restaurant', image_url: '/public/images/restaurant/1.jpg', review: 103},
    {name: 'Ramat Restaurant', image_url: '/public/images/restaurant/2.jpg', review: 563},
    {name: 'EatWell Restaurant', image_url: '/public/images/restaurant/3.jpg', review: 43},
    {name: 'Emeka Restaurant', image_url: '/public/images/restaurant/4.jpg', review: 83},
    {name: 'KFC Restaurant', image_url: '/public/images/restaurant/1.jpg', review: 103},
    {name: 'Ramat Restaurant', image_url: '/public/images/restaurant/2.jpg', review: 563},
    {name: 'EatWell Restaurant', image_url: '/public/images/restaurant/3.jpg', review: 43},
    {name: 'Emeka Restaurant', image_url: '/public/images/restaurant/4.jpg', review: 83},{name: 'KFC Restaurant', image_url: '/public/images/restaurant/1.jpg', review: 103},
    {name: 'Ramat Restaurant', image_url: '/public/images/restaurant/2.jpg', review: 563},
    {name: 'EatWell Restaurant', image_url: '/public/images/restaurant/3.jpg', review: 43},
    {name: 'Emeka Restaurant', image_url: '/public/images/restaurant/4.jpg', review: 83},
  ]

  const savedList = [
    {name: 'KFC Restaurant', image_url: '/public/images/restaurant/1.jpg', review: 103},
    {name: 'Ramat Restaurant', image_url: '/public/images/restaurant/2.jpg', review: 563},
    {name: 'EatWell Restaurant', image_url: '/public/images/restaurant/3.jpg', review: 43},
  ]
  return (
    <Layout>
      <HomeSearch />
      <RestaurantsHub title='Available Restaurant List' data={restaurantLists} />
      <RestaurantsHub title='Saved Restaurant & Meals' data={savedList} />
      {/* <div className="">Landing Page</div> */}
    </Layout>
  )
}

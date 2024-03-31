import { useLocation, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import RightSideNav from "../../Components/RightSideNav/RightSideNav"
import { FaEye } from "react-icons/fa"

const News = () => {
  const {id} = useParams()
  console.log(id)
  const {state : singleNews} = useLocation()
  console.log(singleNews)
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="md:col-span-2 ">
            <div key={singleNews._id} className="py-5 px-2 ">
      <div className="flex items-center justify-between ">
      
<div className="flex">
<div className="w-16 px-3 rounded-full">
      <img className="rounded-full" src={singleNews.author.img}/>
        </div>
         <div>
         <h2>{singleNews.author.name}.</h2>
          <p>{singleNews.author.published_date}.</p>
         </div>
</div>
         <div className="flex px-2 items-center gap-3">
         <FaEye />
        {singleNews.total_view}
         </div>
        </div>
        
        <figure className="mt-5">
          <img src={singleNews.image_url} alt="" />
        </figure>
        <div className="card-body ">
        <h1 className="text-xl font-semibold py-2">{singleNews.title}</h1>
       
            <p className="text-gray-800 font-semibold">
             {singleNews.details}

            </p>
            </div>
            </div>
          
        </div>
        <div className="col-span-1 ">
                <RightSideNav/>
            </div>
    </div>
    </div>
  )
}

export default News
import Header from "../../Components/Header/Header"
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav"
import Navbar from "../../Components/Navbar/Navbar"
import RightSideNav from "../../Components/RightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews"
import NewsCard from "./NewsCard"

const Home = () => {

  return (
    <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar/>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
            <LeftSideNav/>
            </div>
            <div className="md:col-span-2">
              <h1 className="font-semibold text-2xl">Dragon News Home</h1>
            <NewsCard/>
            </div>
            <div>
                <RightSideNav/>
            </div>
        </div>
    </div>
  )
}

export default Home
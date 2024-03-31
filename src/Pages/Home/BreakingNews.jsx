import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const BreakingNews = () => {
  return (
    <div className="flex py-1 px-2 bg-gray-100 rounded-md">
    <button className=" bg-rose-500 text-white font-semibold px-4 rounded-lg py-3">Latest</button>
    <Marquee className=""  pauseOnHover={true} speed={100}>
      <Link className="mr-12" to="/">
        Match Highlights: Germany vs Spain — as it happened ! Match
        Highlights: Germany vs Spain as...
      </Link>
      <Link className="mr-12" to="/">
        I can be a React component, multiple React components.....
      </Link>
      <Link className="mr-12" to="/">
        I can be a React component, multiple React components.....
      </Link>
    </Marquee>
  </div>
  )
}

export default BreakingNews
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

  return (
    <div className="space-y-6">
    <h2 className="text-2xl">All Categories</h2>
    {
        categories.map(category => <Link 
            className="block ml-4 text-xl font-normal" 
            key={category.id}
            to={`/category/${category.id}`}
            >{category.name}</Link>)
    }
    <div className="w-4/6">
      <img className="w-full" src={img1} alt="" />
      <h1 className="text-wrap text-sm py-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
      <p className="text-xs">Sports</p>
    </div>
    <div className="w-4/6">
      <img className="w-full" src={img2} alt="" />
      <h1 className="text-wrap text-sm py-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
      <p className="text-xs">Sports</p>
    </div>
    <div className="w-4/6">
      <img className="w-full" src={img3} alt="" />
      <h1 className="text-wrap text-sm py-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
      <p className="text-xs">Sports</p>
    </div>
</div>
  )
}

export default LeftSideNav
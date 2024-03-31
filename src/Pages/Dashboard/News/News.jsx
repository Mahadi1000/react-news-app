import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNews } from "../../../Features/newsSlice";

const AllNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.app);
  console.log(news)
  useEffect(() => {
    dispatch(showNews());
  }, []);


  return (
    <div>AllNews</div>
  )
}

export default AllNews
/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {  useNavigate } from "react-router-dom"
import  './NewsCard.css'
const NewsCard = () => {
    const navigate = useNavigate()
  const [news, setNews] = useState([])
  console.log(news)
    useEffect(() => {
    fetch('./news.json')
        .then(res => res.json())
        .then(data => setNews(data))
}, [])


    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
  
    const offset = currentPage * itemsPerPage;
    const pageCount = Math.ceil(news.length / itemsPerPage);
  
    const currentNews = news.slice(offset, offset + itemsPerPage);
  
    const handlePageChange = ({ selected: selectedPage }) => {
      setCurrentPage(selectedPage);
    };

    const handleSingleNews = (singleNews) => {
      navigate(`/news/${singleNews._id}`, { state: singleNews });
    };

  return (
    <div>

    {currentNews.map((singleNews) => (
      <div key={singleNews._id} className="py-5 px-2">
      <div className="flex items-center justify-between ">
      
<div className="flex">
<div className="w-16 px-3 rounded-full">
      <img className="rounded-full" src={singleNews.author.img}/>
        </div>
         <div>
         <h2>{singleNews.author.name}</h2>
          <p>{singleNews.author.published_date}</p>
         </div>
</div>
         <div className="flex px-2 items-center gap-3">
         <FaEye />
        {singleNews.total_view}
         </div>
        </div>
        <h1 className="text-xl px-2 font-semibold py-2">{singleNews.title}</h1>
        <figure>
          <img src={singleNews.image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          {singleNews.details.length > 200 ? (
            <p>
              {singleNews.details.slice(0, 150)}{" "}
              <span className="text-blue-500 font-semibold">
                {" "}
                <button onClick={()=> handleSingleNews(singleNews)}>Read more...</button>
              </span>
            </p>
          ) : (
            <p> {singleNews.details} </p>
          )}
        </div>
      </div>
    ))}

    {pageCount > 1 && (
      <ReactPaginate
      className="flex justify-around py-4"
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        pageLinkClassName="page-link"
        breakLabel="..."
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    )}
  </div>
  )
}

export default NewsCard
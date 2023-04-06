import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Sectwo() {
    const [trend,setTrend]=useState([])
    useEffect(()=>{
     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
     .then(res => res.json())
       .then(data=>setTrend(data.results))
    },[])
    console.log(trend);
  return (
    <>
     <div> 
        <br></br>
        <h4><i>Trending</i></h4> 
         {  trend?.map((movies)=>(
            <Link to={`movie/${movies?.id}`} style={{textDecoration:"none",color:"white"}}>
                <div className="cards">
                        <img className="cards_img" width='200' src={`https://image.tmdb.org/t/p/original${movies?movies.poster_path:""}`}/>
                        <div className="cards__overlay">
                            <div className="card__title">
                                {movies?movies.original_title:""}
                            </div>
                            <div className="card__runtime">
                                {movies?movies.release_date:""}
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
  
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Tvpop() {
    const [tvpop,setTvpop]=useState([])
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
      .then(res => res.json())
      .then(data=>setTvpop(data.results))
    },[])
    // console.log(tvpop);
  return (
    <>
    <h4><i>Tv Popular</i></h4>
 {  tvpop?.map((shows)=>(
            <Link to={`show/${shows?.id}`} style={{textDecoration:"none",color:"white"}}>
                <div className="cards">
                        <img className="cards_img" width='200' src={`https://image.tmdb.org/t/p/original${shows?shows.poster_path:""}`}/>
                        <div className="cards__overlay">
                            <div className="card__title">
                                {shows?shows.original_name:""}
                            </div>
                            <div className="card__runtime">
                                {shows?shows.overview:""}
                            </div>
                        </div>
                    </div>
                </Link>
                ))}  
    </>
  )
}

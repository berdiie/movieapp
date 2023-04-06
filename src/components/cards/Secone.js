import React,{useState,useEffect}from 'react'
import  Skeleton, {SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import './secone.css'


export default function Secone() {
    const [movie,setisLoading]=useState([])
    useEffect(()=>{
       fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
       .then(res => res.json())
       .then(data=>setisLoading(data.results))

        
        // setTimeout(()=>{
        //     setisLoading(false)
        // },1500)
   
    },[])
    console.log(movie);
  return (
    <>
     <div> 
        <br></br>
        <h4><i>Most Popular</i></h4> 
         {  movie?.map((movies)=>(
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

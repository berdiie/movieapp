import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
export default function NewR() {
    const [newmov,setNewmov]=useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/latest?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data=>setNewmov(data))
      },[])
      console.log(newmov);
  return (
    <>
     <div> 
        <br></br>
        <h4><i>New Releases</i></h4> 
       {  newmov?.map((movies)=>(
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

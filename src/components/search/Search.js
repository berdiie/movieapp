import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Navbar/Nav';
import { Link } from 'react-router-dom'

export default function Search() {
  const {id}=useParams()
  const [res,setRes]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${id}&page=1&include_adult=false`)
    .then((data)=>{
        // console.log(data.data.results);
        setRes(data.data.results)
    })
  },[])
console.log(res);
// console.log(id);
  return (
    <>
     <Nav/>
     <br></br>
     <h4><i>Top Results : <font color='yellow'>{id}</font> </i></h4>
     {  res?.map((movies)=>(
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
    </>
  )
}

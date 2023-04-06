import React,{useState,useEffect} from 'react'
import './secsidebar.css'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Secsidebar() {
    const [list,setList]=useState([])
    useEffect(()=>{
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data=>setList(data.results))
    },[])
    console.log(list);
  return (
    <>
    <div className='poster'>
        <Carousel className='carch'
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
              {
       list.map(movie => (
        <>
        <Link style={{textDecoration:'none',color:'white'}} to={'/movie/${movie.i'}>
            <div className='posimg'>
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}></img>
             </div>
             <div className='posimg_overlay'>
                <div className='posimg_title'>
                    <h3><i>{movie ? movie.original_title : ""}</i></h3>
                </div>
                
                <div className='posimg_runtime'>
                    <i>{movie ? movie.release_date :""}</i>
                </div>
                <div className='posimg_description'>
                    {movie ? movie.overview :""}
                </div>
            </div>
            </Link>
        </>
       )) 
      }
        </Carousel>
    </div>
    </>
  )
}

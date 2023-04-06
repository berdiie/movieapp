import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Tvpop from './tvpop/Tvpop';
import Tveps from './tveps/Tveps';


export default function Tv() {
    const [show,setShow]=useState([])
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
      .then(res => res.json())
      .then(data=>setShow(data.results))
    },[])
    // console.log(show);
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:"black"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" style={{height:'45px',width:'50px'}}></img>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="d-flex navbar-nav h-100 w-100 text-md-center">
      <li className="nav-item flex-fill">
      <a className="nav-link" href="#">
        <Link to='/' style={{textDecoration:'none'}}>
          <h6><i><font color='white'>Tv Shows</font></i></h6>
        </Link>
      </a>
      </li>
      <li className="nav-item flex-fill">
      <a className="nav-link" href="#">
        <Link to='/games' style={{textDecoration:'none'}}>
          <h6><i><font color='white'>Series</font></i></h6>
        </Link>
      </a>
      </li>
      <li className="nav-item flex-fill">
        <a className="nav-link" href="#">
        <form className="d-flex input-group w-auto">
    <input
      type="search"
      className="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      size='2'
    />
    <span className="input-group-text border-0" id="search-addon">
     <i> <SearchIcon/></i>
    </span>
  </form>
        </a>
      </li>
      <li className="nav-item flex-fill">
        <a className="nav-link" href="/">
        <h6><i><font color='white'>Home</font></i></h6>
        </a>
      </li>
    </ul>
  </div>
</nav>
<br></br>
<h4><i>Airing Today</i></h4>
 {  show?.map((shows)=>(
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
    <br></br><br></br>
    <Tvpop/>
    <br></br><br></br>
    <Tveps/>
    </>
  )
}

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './headbar.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

export default function Headbar() {
  const [value,setValue]=useState([])
  const nav=useNavigate()
  const onchange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setValue(value)
  }
  console.log(value);
  const submit=(data)=>{
  // console.log('aa',data);
  nav(`/search/${data}`)

  }
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
          <Link to='/new' style={{textDecoration:'none'}}>
            <h6><i><font color='white'>New Releases</font></i></h6>
          </Link>
        </a>
        </li>
        <li className="nav-item flex-fill">
        <a className="nav-link" href="#">
          <Link to='/upcom' style={{textDecoration:'none'}}>
            <h6><i><font color='white'>Upcoming</font></i></h6>
          </Link>
        </a>
        </li>
        <li className="nav-item flex-fill">
        <a  className="nav-link" href="https://miminogames.com/">
            <h6><i><font color='white'>Games</font></i></h6>
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
        onChange={onchange}
      />
      <button  onClick={()=>{submit(value)}}>
        <span className="input-group-text border-0" id="search-addon">
       <i> <SearchIcon/></i>
      </span>
      </button>
    </form>
          </a>
        </li>
        <li className="nav-item flex-fill">
          <a className="nav-link" href="#">
          <h6><i><font color='white'>Profile</font></i></h6>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  


</>
  
  )
}

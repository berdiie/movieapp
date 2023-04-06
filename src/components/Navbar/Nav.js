import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
export default function Nav() {
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
          <h6><i><font color='white'>Home</font></i></h6>
        </Link>
      </a>
      </li>
      <li className="nav-item flex-fill">
      <a className="nav-link" href="#">
        <Link to='/games' style={{textDecoration:'none'}}>
          <h6><i><font color='white'>Games</font></i></h6>
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

import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
    const [state,setState]=useState([])
    const [local,setLocal]=useState([])
    const navigate=useNavigate()
    const onchange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setState({...state,[name]:value})
    }
    // console.log(state);
    const submit=()=>{
        axios.post('http://localhost:3001/user/userlogin',state)
        .then((data)=>{
          console.log(data.data);
          if(data.data.status==true){
            localStorage.setItem('ecom',JSON.stringify(data.data))
            navigate('/prodb')
          }
          else{
            toast.error('🦄 something went wrong', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
        })
        console.log(state);
      }
  return (
    <>
    <div className="wrapper">
  <div className="logo">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
      alt=""
    />
  </div>
  <div className="text-center mt-4 name"></div>
  <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
      <span className="far fa-user" />
      <input type="text" name="username" placeholder="Username/e-mail" onChange={onchange}/>
    </div>
    <div className="form-field d-flex align-items-center">
      <span className="fas fa-key" />
      <input type="password" name="password" placeholder="Password" onChange={onchange}/>
    </div>
    <button className="btn mt-3" onClick={submit}>Login</button>
  </form>
  <div className="text-center fs-6">
    <a href="#">Forget password?</a> or <a href="#"><Link to='/reg' style={{textDecoration:"none"}}>Sign up</Link></a>
  </div>
</div>

    </>
  )
}

import React, { useState,useEffect, useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profile.css'


export default function Profile() {
    const [profile,setProf]=useState([])
    const navigate=useNavigate()
    const details=JSON.parse(window.localStorage.getItem('ecom'))
    console.log(details);
    const logout=()=>{
      localStorage.removeItem('ecom')
      navigate('/')
    }
    useEffect(()=>{
      if(details!=null){
      axios.get(`http://localhost:3001/user/getdb/${details.id}`)
      .then((data)=>{
        console.log("profile",data.data.message);
        setProf(data.data.message[0])
      })  
      }
      else{

      } 
  },[])
  return (

    <div class='pro'> 
    {
      details==null?
        <>
        <center>
        <p style={{color:"black"}}>Please Login!</p>
        </center>
        </>
        :
        <>
        <div class="prof">
          <center>
          <div class='title'>
            <p class='first'>Welcome &nbsp;&nbsp; {profile.username}</p>
            <p class='sec'> email:{profile.email}</p>
          </div>
          <button class='one' onClick={logout}>Logout</button>
          </center>
        </div>
        </>
    }
    </div>

  )
}
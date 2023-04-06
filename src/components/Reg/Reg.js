import React, { useState } from 'react'
import './reg.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Reg() {
    const [regdb,setRegdb]=useState({
        username:"",
        email:"",
        password:"",
        dob:"",
      })
         
      const onchange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setRegdb({...regdb,[name]:value})
      }
    //   console.log(regdb);
      const submit=()=>{
        console.log(regdb);
        axios.post('http://localhost:3001/user/register',regdb).then((data)=>{
          console.log(data);
        })
      }
  return (
    <>
    <section
  className="vh-100 bg-image"
  style={{
    backgroundImage:
      'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
  }}
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name='username'
                    className="form-control form-control-lg" onChange={onchange}
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name='email'
                    className="form-control form-control-lg" onChange={onchange}
                  />
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="date"
                    id="form3Example1cg"
                    className="form-control form-control-lg" name='dob' onChange={onchange}
                  />
                  <label className="form-label" htmlFor="form3Example1cg">
                    Date Of Birth
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name='dob'
                    className="form-control form-control-lg" onChange={onchange}
                  />
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    onClick={submit}
                  >
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <a href="#!" className="fw-bold text-body">
                  <Link to='/log' style={{textDecoration:"none"}}>Login here</Link>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

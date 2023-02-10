import React from 'react'
import { useState, useContext } from 'react';
import './Signup.css';
import './LoginForm.css'
import {useNavigate, NavLink} from 'react-router-dom';
// import { createContext } from 'react';
// import { useContext } from 'react';
import { Adminloggedin } from './Context/Context';
import { userloggedIn } from './Context/Context';
import { userData } from './Context/Context';

function LoginForm({getData}) {
  const { adminLogin,setAdminLogin } = useContext(Adminloggedin);
  const {userlogged,setuserLogged} = useContext(userloggedIn);
  const { userdata,setuserdata } = useContext(userData);
  const [loading,setLoading] = useState(false);
  // const Navigate = useNavigate;
  window.scrollTo(0, 0);
  const [formdata,setformdata] = useState({
    email:"",
    password:"",
  })
  function changeValue(event){
    const {name,value} = event.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  }
  const [errorTrigger,setErrorTrigger] = useState(false);
  const [error,setError] = useState(null);
  const Navigate = useNavigate();

  const submitform = async (event)=>{
    setLoading(true);
    event.preventDefault();
    const res = await fetch("https://server.multiplataforma-capital.com/login",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formdata),
    });
    const data = await res.json();
    // console.log(data);
    setLoading(false);
    if(data.msg === "Invalid Credentials"){
      setError(data.msg)
      setErrorTrigger(true);
    }else if(data.msg === "admin" ){
      setAdminLogin(true);
    }
    else{
      // setLoggedIn(true);
      setuserLogged(true);
      setuserdata(data);
      Navigate('/');
    }
    setTimeout(() => {
      setErrorTrigger(false);
  }, 3000);
  }
    // const Loggedin = createContext();
  return (
    <>
        <div className="s_form_parent">
            <form className="signup" onSubmit={submitform} >
            { errorTrigger &&
                <div className='sign_up_already_exist_msg'>
                    { error }
                </div>
            }
                <div className="form_head_title">
                  Login
                </div>                
                <label htmlFor="email"><div className="form_title">Email</div></label>
                <input type="email" placeholder='Email' required id='email' name='email' onChange={changeValue} value={formdata.email} className='s_form_input'/>
                
                <label htmlFor="password"><div className="form_title">Password</div></label>
                <input type="password" placeholder='Password' required id='password' name='password' onChange={changeValue} value={formdata.password} className='s_form_input'/>
                { !loading &&
                  <input type="submit" className='submit_form'/>
                }
                { loading &&
                  <div type="submit" className='submit_form' style={{display:"flex",justifyContent:"center"}} >
                    <div class="spinner-border" role="status" style={{width:"1.5rem",height:"1.5rem",fontSize:"9px"}} ></div>
                  </div>
                }
                <NavLink to='/signup' className='already_member'><div className="already_member_element">Create an Account?</div></NavLink>
            </form>
        </div>
        <svg className='form_cross' onClick={()=>Navigate('/')} style={{position:"absolute",top:"30",right:"40",fill:"white",height:"2.5rem",zIndex:"10",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    </>
  )
}

export default LoginForm

import React from 'react'
import { useRef , useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import './Navbar.css'
import { userloggedIn } from '../Context/Context'
import { userData } from '../Context/Context'
import { Adminloggedin } from '../Context/Context';


function Navbar({getData}){
  const Navigate = useNavigate();
  const { userlogged,setuserLogged } = useContext(userloggedIn);
  const { userdata,setuserdata } = useContext(userData);
  const [showdropdown,setshowdropdown] = useState(false);
  const { adminLogin,setAdminLogin } = useContext(Adminloggedin);
  
  // const [userData,setUserData] = useState({});

  useEffect(()=>{
      getData();
  },[])

  useEffect(()=>{
    const getLoggedin = async ()=>{
      const res = await fetch('https://server.multiplataforma-capital.com/isloggedin',{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      if(data.msg === "loggedin"){
        setuserLogged(true);
      }else if(data.msg === "admin" ){
        setAdminLogin(true);
      }else{
        setuserLogged(false);
      }
    }
    getLoggedin();
  },[])
  
  const logout =async ()=>{
    const res = await fetch('/logout',{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      credentials: "include"
    });
    const data = await res.json();
    console.log(data);
    if(data.msg === "loggedOut"){
      window.location.reload();
    }
  }

  useEffect(()=>{
    document.addEventListener("click",handleClickOutside2,true);
  },[])

  const refProfile = useRef(null);
  const handleClickOutside2 = (e)=>{
    if(!refProfile.current.contains(e.target)){
      setshowdropdown(false);
    }else{
    }
  }

  return (
    <>
      <div className="navbar_parent noselect">
      <div className="nav_left">
        <img src="/images/logo1.png" alt="" className='nav_logo' />
      </div>
        <ul className="nav-navbar">
          <li className="nav-element">
            <NavLink className="nav-link" aria-current="page" to="/"><div className='nav_child' style={{color:"white"}}> { userlogged? "Dashboard" : "Inicio" }</div></NavLink>
          </li>
          <li className="nav-element">
            <NavLink className="nav-link" to="/about"><div className='nav_child' style={{color:"white"}}>Quiénes somos</div></NavLink>
          </li>
          <li className="nav-element">
            <NavLink className="nav-link" to="/contact"><div className='nav_child' style={{color:"white"}}>Contactanos</div></NavLink>
          </li>
          { userlogged &&
            <li className="nav-element">
              <NavLink className="nav-link" to="/plans"><div className='nav_child' style={{color:"white"}}>Planes</div></NavLink>
            </li>
          }

        </ul>
          <div className="nav_right">            
            { !userlogged &&
              <div className="nav_btn_parent">
                <NavLink to='/signup' className='nav_button' >SIGN UP</NavLink>
                <NavLink to='/login' className='nav_button2' >LOGIN</NavLink>
              </div>
            }
            { userlogged &&
              <div className="nav_profile">
                <div className="nav_profile_icon" ref={refProfile} onClick={()=>setshowdropdown(!showdropdown)} >
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height:"1.3rem",marginBottom:"2px",fill:"white"}} viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <div className="profile_dropdown" style={{display:showdropdown?"":"none"}} ref={refProfile} >
                      <NavLink to='/profile' className="profile_dropdown_element" style={{borderRadius:"7px 7px 0 0",color:"#10072b"}} >Profile</NavLink>
                      <NavLink to='/contact' className="profile_dropdown_element" style={{color:"#10072b"}} >Support</NavLink>
                      <NavLink to='/plans' className="profile_dropdown_element" style={{color:"#10072b"}}>Plans</NavLink>
                      <NavLink to='/updatepassword' className="profile_dropdown_element" style={{color:"#10072b"}}>Password</NavLink>
                      <hr className='line' style={{margin:"3px 18px"}} />
                      <div className="profile_dropdown_element" onClick={()=>logout()} >Logout</div>
                    </div>
                </div>
                <div className="nav_username" style={{color:"white",marginLeft:"10px"}} onClick={()=>getData()} > { userdata.name } </div>
              </div>
            }
          </div>
      </div>
    </>
  )
}
export default Navbar

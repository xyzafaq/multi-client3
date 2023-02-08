import React, { useState } from 'react'
import './AdminNavbar.css'
import {NavLink} from 'react-router-dom'

function AdminNavbar() {
  const [s1,sets1] = useState(false);
  const [s2,sets2] = useState(false);
  const [s3,sets3] = useState(false);
  const [s4,sets4] = useState(false);
  const [s5,sets5] = useState(false);
  const [s6,sets6] = useState(false);
  const [s7,sets7] = useState(false);
  const [s8,sets8] = useState(false);
  const [s9,sets9] = useState(false);
  function active1(){
    sets1(true);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
    sets8(false);
    sets9(false);
  }
  function active2(){
    sets1(false);
    sets2(true);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
    sets8(false);
    sets9(false);
  }
  function active3(){
    sets1(false);
    sets2(false);
    sets3(true);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
    sets8(false);
    sets9(false);
  }
  function active4(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(true);
    sets5(false);
    sets6(false);
    sets7(false);
    sets8(false);
    sets9(false);
  }
  function active5(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(true);
    sets6(false);
    sets7(false);
    sets8(false);
    sets9(false);
  }
  function active6(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(true);
    sets7(false);
    sets8(false);
    sets9(false);
  }
  function active7(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(true);
    sets8(false);
    sets9(false);
  }
  function active8(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
    sets8(true);
    sets9(false);
  }
  function active9(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
    sets8(false);
    sets9(true);
  }
  let sideHov = {
    border:"1px solid white",
    backgroundColor:'rgb(255 171 64 / 43%)',
    color:'white'
  }
  return (
    <>
      <div className="admin_navbar">
          <li className="admin_nav_element"  > 
            <div className="admin_nav_link" style={s1?sideHov:{}} onClick={()=>{active1()}}>
              <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"/></svg>
            Dashboard
            </div>
          </li>
          <li className="admin_nav_element" >
            <div className="admin_nav_link" style={s2?sideHov:{}} onClick={()=>{active2()}} >
              <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 336c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
            Wallet</div>
          </li>

          <li  className="admin_nav_element">
            <div className="admin_nav_link" style={s3?sideHov:{}} onClick={()=>{active3()}} > 
            <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>            
            My members</div>
          </li>

          <li className="admin_nav_element">
            <div className="admin_nav_link" style={s4?sideHov:{}} onClick={()=>{active4()}}> 
            <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
            Benefit Plans</div>
          </li>
          <li className="admin_nav_element">
            <div className="admin_nav_link" style={s5?sideHov:{}} onClick={()=>{active5()}}> 
            <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c10.6 1.6 42.1 6.7 55.1 10c17.1 4.3 27.5 21.7 23.2 38.9s-21.7 27.5-38.9 23.2c-9.3-2.4-37.6-7-48.9-8.7c-32.1-4.8-59.6-2.4-78.5 4.9c-18.3 7-25.9 16.9-27.9 28c-1.9 10.7-.5 16.8 1.3 20.6c1.9 4 5.6 8.5 12.9 13.4c16.2 10.8 41.1 17.9 73.3 26.7l2.8 .8c28.4 7.7 63.2 17.2 89 34.3c14.1 9.4 27.3 22.1 35.5 39.7c8.3 17.8 10.1 37.8 6.3 59.1c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.2-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.4 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.7 .5-16.8-1.3-20.6c-1.9-4-5.6-8.5-12.9-13.4c-16.2-10.8-41.1-17.9-73.3-26.7l-2.8-.8c-28.4-7.7-63.2-17.2-89-34.3c-14.1-9.4-27.3-22.1-35.5-39.7c-8.3-17.8-10.1-37.8-6.3-59.1C25 114.1 53 89.3 86 76.7c13-5 27.2-8.2 42-10V32c0-17.7 14.3-32 32-32z"/></svg>
            Bonus</div>
          </li>
          <li className="admin_nav_element">
            <div className="admin_nav_link" style={s6?sideHov:{}} onClick={()=>{active6()}}> 
            <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
             Red </div>
          </li>
          <li className="admin_nav_element">
            <div className="admin_nav_link" style={s7?sideHov:{}} onClick={()=>{active7()}}> 
            <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            Bono derivado</div>
          </li>
          <li className="admin_nav_element">
            <div className="admin_nav_link" style={s8?sideHov:{}} onClick={()=>{active8()}}> 
            <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>           
            Add user</div>
          </li>
          <li className="admin_nav_element">
            <div className="admin_nav_link" style={s9?sideHov:{}} onClick={()=>{active9()}}> 
            <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>            
            Recursos</div>
          </li>
        </div>
    </>
  )
}

export default AdminNavbar

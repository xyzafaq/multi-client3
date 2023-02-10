import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Contact from './Components/Contact';
import Plans from './Components/Plans';
import LoginForm from './Components/LoginForm';
import SignUp from './Components/SignUp';
import UpdatePassword from './Components/Updatepassword';
import Silver from './Components/Silver';
import Gold from './Components/Gold';
import ScrollToTop from './Components/ScrollToTop';
import ProfileSetting from './Components/ProfileSetting';
import SearchedUser from './admin/SearchedUser';
import Useredit from './admin/Useredit';
import HomeAdmin from './admin/HomeAdmin';
import Request from './admin/Request';

import { Adminloggedin } from './Components/Context/Context';
import { userloggedIn } from './Components/Context/Context';
import { userData } from './Components/Context/Context';

function App(){
  const [adminLogin,setAdminLogin] = useState(false);
  const [userlogged,setuserLogged] = useState(false);
  const [userdata,setuserdata] = useState({});
  const [showSearchUser,setShowSearchUser] = useState(false);



  const [s1,sets1] = useState(true);
  const [s2,sets2] = useState(false);
  const [s3,sets3] = useState(false);
  const [s4,sets4] = useState(false);
  const [s5,sets5] = useState(false);
  const [s6,sets6] = useState(false);
  const [s7,sets7] = useState(false);
  function active1(){
    sets1(true);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
  }
  function active2(){
    sets1(false);
    sets2(true);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
  }
  function active3(){
    sets1(false);
    sets2(false);
    sets3(true);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(false);
  }
  function active4(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(true);
    sets5(false);
    sets6(false);
    sets7(false);
  }
  function active5(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(true);
    sets6(false);
    sets7(false);
  }
  function active6(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(true);
    sets7(false);
  }
  function active7(){
    sets1(false);
    sets2(false);
    sets3(false);
    sets4(false);
    sets5(false);
    sets6(false);
    sets7(true);
  }
  let sideHov = {
    border:"1px solid white",
    backgroundColor:'rgb(255 171 64 / 43%)',
    color:'white'
  }

  const logout =async ()=>{
    const res = await fetch('https://server.multiplataforma-capital.com/logout',{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    if(data.msg === "loggedOut"){
      window.location.reload();
    }
  }
  const getData = async ()=>{
    const res = await ('https://server.multiplataforma-capital.com/userData/userData',{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      }
      });
      const data = await res.json();
      // setLoading(false)
      // console.log(data);
      setuserdata(data);
  }
  useEffect(()=>{
    getData();
  },[])
return (
        <>
        <Adminloggedin.Provider value={{adminLogin,setAdminLogin}}>
        <userloggedIn.Provider value={{userlogged,setuserLogged}}>
        <userData.Provider value={{userdata,setuserdata}}>
          <ScrollToTop />
          {adminLogin &&            
              <section>
                  <div className="dashboard_s1" style={{display:"grid",gridTemplateColumns:"20% 80%"}} >
                    <div className="dash_left" >
                      <div className="admin_navbar">
                      <div className="userdata_nav flex"  style={{color:"white",flexDirection:"column",marginBottom:"1rem 0"}} >
                        {/* <div style={{fontSize:"17px",fontWeight:"500"}} >Nombre de uduaro: Cryptotrader</div> */}
                        <div style={{color:"#ef5261"}} >Admin</div>
                      </div>
                      <NavLink to='/' className="admin_nav_element" style={{color:"white",textDecoration:"none"}}  > 
                        <div className="admin_nav_link" style={s1?sideHov:{}} onClick={()=>{active1()}}>
                          <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"/></svg>
                          <span style={{color:"white"}} >Dashboard</span>
                        </div>
                      </NavLink>
                      <NavLink to='/withdrawalrequest' className="admin_nav_element" style={{textDecoration:"none"}} >
                        <div className="admin_nav_link" style={s2?sideHov:{}} onClick={()=>{active2()}} >
                          <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 336c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
                          <span style={{color:"white"}} >Requests</span></div>
                      </NavLink>
                      <li className="admin_nav_element" onClick={()=>logout()} >
                        <div className="admin_nav_link">
                          <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 336c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
                          <span style={{color:"white"}} >Logout</span></div>
                      </li>
                      </div>
                    </div>
                    <div className="dash_right" style={{backgroundColor: "#eeeeee"}}>                      
                      <Routes>
                        <Route path='/' element={<HomeAdmin/>} />                        
                        <Route path='/useredit/:id' element={<Useredit/>} />
                        <Route path='/withdrawalrequest' element={<Request/>} />
                        <Route path='*' element={<HomeAdmin/>}/>                  
                      </Routes>                                          
                    </div>
                  </div>
              </section>
              }
            { !adminLogin &&
              <>
              <Navbar getData={getData} />
            <Routes>
                <Route path='/' element={userlogged?<Dashboard/>:<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/about2' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                {userlogged && <Route path='/profile' element={<ProfileSetting/>} />}
                {userlogged && <Route path='/plans' element={<Plans/>} />}
                {userlogged && <Route path='/silver' element={<Silver/>} />}
                {userlogged && <Route path='/gold' element={<Gold/>} />}
                {!userlogged && <Route path='/login' element={<LoginForm getData={getData} />} />}
                {!userlogged && <Route path='/signup' element={<SignUp/>} />}
                {userlogged && <Route path='/updatepassword' element={<UpdatePassword/>} />}
                <Route path='*' element={userlogged?<Dashboard/>:<Home/>}/>
            </Routes>
            <Footer />
              </>
            }
        </userData.Provider>
        </userloggedIn.Provider>
        </Adminloggedin.Provider>
        </>
  );
}
export default App;

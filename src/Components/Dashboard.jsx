import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import * as Yup from 'yup';
import { NavLink , useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import AdminNavbar from './Sidebar/AdminNavbar'
import SignUp from './SignUp';
import { userData } from './Context/Context';

function Dashboard() {
  const [requestSuccess,setrequestSuccess] = useState(false);
  const [requestFailed,setrequestFailed] = useState(false);
  const [invalidInput,setinvalidInput] = useState(false);
  const {userdata,setuserdata} = useContext(userData);
  const [ withdraw, setwithdraw ] = useState(0);

  function withdrawSubmit(e){
    e.preventDefault();
    console.log(withdraw);
    const submitform = async () => {
        const res = await fetch("https://server.multiplataforma-capital.com/withdrawrequest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({withdraw}),
        });
        const data = await res.json();
        setwithdraw(0);
        if( data.msg === 'success' ){
            console.log("Requested Successfully");
            setrequestSuccess(true);
            setrequestFailed(false);
            setinvalidInput(false);
                
            setTimeout(() => {
              setrequestFailed(false);
              setrequestSuccess(false);
              setinvalidInput(false);
            },5000);
        }
        if( data.msg === 'already requestd' ){
            console.log("already requestd");
            setrequestFailed(true);
            setrequestSuccess(false);
            setinvalidInput(false);
                            
            setTimeout(() => {
              setrequestFailed(false);
              setrequestSuccess(false);
              setinvalidInput(false);
            },5000);
        }
    };
    if(withdraw>0){
      submitform();
    }else{
      console.log("invalid input");
      setinvalidInput(true);
      setrequestFailed(false);
      setrequestSuccess(false);
          
      setTimeout(() => {
        setrequestFailed(false);
        setinvalidInput(false);
        setrequestSuccess(false);
      },5000);
    }
}
function withdrawChange(e){
    const { value ,name } = e.target;
    setwithdraw(value)
}
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
  const Navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  // window.scrollTo(0, 0);
const SignUpSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("Please enter your name"),
    email: Yup.string().required("Please enter your email"),
    password: Yup.string().min(8).max(50).required("Please enter your Password").matches(/[A-Z]/, 'Must contain one uppercase').matches(/(\d)/, 'Must contain one number'),
    confirmpassword: Yup.string().oneOf([Yup.ref("password"),null],"Passwords not matching").required("Please enter your Password"),
    birthday: Yup.date().required("Please select Date of Birth"),
});
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    birthday: "",
  }
  const [alreadyRegistered,setAlreadyRegistered] = useState(false);
  const [registeredSuccessfully,setRegisteredSuccessfully] = useState(false);

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: initialValue,
    validationSchema: SignUpSchema,
    onSubmit: (values)=>{
      setLoading(true);
        // console.log(values);
        const submitform = async () => {
            const res = await fetch("https://server.multiplataforma-capital.com/addmember", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            const data = await res.json();
            // console.log(data);
            setLoading(false);
            if(data.msg === 'User Already Registered'){
                // console.log(data);
                setAlreadyRegistered(true);
                setRegisteredSuccessfully(false);
                
                setTimeout(() => {
                    setAlreadyRegistered(false);
                    setRegisteredSuccessfully(false);
                }, 5000);
            }
            if(data.msg==='success'){
                // setuserLogged(true);
                setAlreadyRegistered(false);
                setRegisteredSuccessfully(true);
                
                setTimeout(() => {
                  setAlreadyRegistered(false);
                  setRegisteredSuccessfully(false);
              }, 5000);
            }
          };
          submitform();
    },
    });

  return (
    <>
      <section>
        <div className="dashboard_s1" style={{display:"grid",gridTemplateColumns:"20% 80%"}} >
          <div className="dash_left" >
            <div className="admin_navbar">
            <div className="userdata_nav flex"  style={{color:"white",flexDirection:"column",marginBottom:"1rem 0"}} >
              <div style={{fontSize:"17px",fontWeight:"500"}} >Nombre de uduaro: Cryptotrader</div>
              <div style={{color:"#ef5261"}} >{ userdata.name }</div>
            </div>
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
              Profit Plans</div>
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
              <svg className='admin_nav_icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>           
              Add user</div>
            </li>
            <li className="admin_nav_element">
              <div className="admin_nav_link" onClick={()=>Navigate('/plans')}> 
              <svg className="admin_nav_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z"/></svg>              Upgrade Membership</div>
            </li>
            </div>
          </div>
          <div className="dash_right" >
            { s1 &&
              <>
              <div className="tab_title" style={{color:"white",fontSize:"20px",fontWeight:"500",margin:"0 0 1rem 0"}} >Dashboard</div>
                <div className="balance_con">
                  <div className="balance_title">Balance Total</div>
                  <div className="balance_value">{userdata.totalbalance}$</div>
                </div>
                <div className="bal_bottom_con">
                  <div className="bbc_elem1">
                    <div className="bbc_elem1_txt1">Estrategia</div>
                    <div className="bbc_elem1_txt2">Monthly Profit</div>
                    <hr className="line" style={{height:"2px"}} />
                    <div className="bbc_elem1_bottom">
                      <img style={{height:"11rem"}} src="/icons/pie-graph.png" alt="" />
                      <div style={{marginTop:"10px",color: "#ffffffcc"}} >PP Start</div>
                      <div style={{fontWeight:"bold"}} >{ userdata.ppstart }%</div>
                      {/* <div style={{marginTop:"10px",color: "#ffffffcc"}} >PP Advance</div>
                      <div style={{fontWeight:"bold"}} >{ userdata.ppadvance }%</div> */}
                      <div style={{marginTop:"10px",color: "#ffffffcc"}} >PP Pro</div>
                      <div style={{fontWeight:"bold"}}>{userdata.pppro}%</div>
                    </div>
                  </div>
                  <div className="bbc_elem2">
                    <div className="bbc_elem1_txt1">Captal & <br /> Ganacias </div>
                    <hr className="line" style={{height:"2px"}} />
                    <div style={{marginTop:"10px",color: "#ffffffcc",marginLeft:"1.5rem"}} >Initial Capital</div>
                    <div style={{fontWeight:"bold",marginLeft:"1.5rem",fontSize:"20px"}}> { userdata.initialcapital } $</div>
                    <hr className='line' style={{height:"5px",width:"60%",marginLeft:"1.5rem"}} />
                    <div style={{marginTop:"10px",color: "#ffffffcc",marginLeft:"1.5rem",marginTop:"30px"}} >Ganancias</div>
                    <div style={{fontWeight:"bold",marginLeft:"1.5rem",fontSize:"20px"}}>{userdata.grancias}$</div>
                    <hr className='line' style={{height:"5px",width:"60%",marginLeft:"1.5rem"}} />
                  </div>
                  <div className="bbc_elem3">
                    <div className="bbc_elem1_txt1">Liquidez</div>
                    <div className='flex' style={{height:"100%",width:"100%"}} > 
                        <div className="elem3_mini">
                          <div className='flex' style={{flexDirection:"column"}} >
                            <img style={{height:"5rem",marginBottom:"20px"}} src="/icons/bitcoin.png" alt="" />
                            <div style={{color: "#ffffffcc"}} >Bloque ado</div>
                            <div style={{fontWeight:"bold",fontSize:"18px"}}>{ userdata.bloqueado }$</div>
                          </div>
                          <div className='flex' style={{flexDirection:"column"}} >
                            <img style={{height:"5rem",marginBottom:"20px"}} src="/icons/bitcoin1.png" alt="" />
                            <div style={{color: "#ffffffcc"}} >Disponible</div>
                            <div style={{fontWeight:"bold",fontSize:"18px"}}>{userdata.disponible}$</div>
                          </div>
                        </div>
                    </div>
                  </div>                                    
                </div>
              </>
            }
            { s2 &&
              <div className="s2_parent">
              { requestSuccess &&
                <div className='sign_up_success_msg' style={{marginTop: "5rem",width: "20rem"}} >
                    Request Submitted Successfully
                </div>
              }
              { requestFailed &&
                <div className='sign_up_already_exist_msg' style={{marginTop: "5rem",width: "20rem"}} >
                  Already requested a Withdraw
                </div>
              }
              { invalidInput &&
                <div className='sign_up_already_exist_msg' style={{marginTop: "5rem",width: "20rem"}} >
                  Invalid Input
                </div>
              }
              <div className="tab_title" style={{color:"white",fontSize:"20px",fontWeight:"500",margin:"0 0 1rem 0"}} >Wallet</div>
                <div className="s2_txt1">Credit (Crypto) <span className='flex' style={{float:"right",height:"2rem",width:"10rem"}} >
                  <input style={{fontSize:"15px",height:"1.5rem",width:"4rem", padding:"1px 4px",marginRight:"8px",textAlign:"center",outline:"none"}}
                  onChange={withdrawChange} value={withdraw} type="number" />
                  <div style={{fontSize:"15px",border:"1px solid #4ea330",padding:"2px 6px",borderRadius:"9px",backgroundColor:"#184818",cursor:"pointer"}}
                  onClick={withdrawSubmit} >Withdraw</div>
                </span></div>
                <div className="s2_text2">Usuario: { userdata.name } </div>
                <div className="s2_txt3">Saldo: {userdata.saldo} </div>
                <div className="s2_text2">Cartera: {userdata.cartera } </div>
                <div>
                  <div className="s2_bottom">
                    <div className="s2_bottom_con flex">
                      <div>October 13, 2023 6:30</div>
                    </div>
                    <div className="s2_bottom_con flex">
                      <div>Deposito/Credito 0.00</div>
                    </div>
                    <div className="s2_bottom_con flex">
                      <div>Retiro/Credito 9500</div>
                    </div>
                  </div>
                  <div className="s2_bottom">
                    <div className="s2_bottom_con flex">
                      <div>October 13, 2023 6:30</div>
                    </div>
                    <div className="s2_bottom_con flex">
                      <div>Deposito/Credito 0.00</div>
                    </div>
                    <div className="s2_bottom_con flex">
                      <div>Retiro/Credito 9500</div>
                    </div>
                  </div>
                </div>
              </div>
            }
            { s3 &&
              <>
              <div className="tab_title" style={{color:"white",fontSize:"20px",fontWeight:"500",margin:"0 0 1rem 0"}} >Mi Membersia</div>
              <div className="planes_mini_con" style={{color:"white"}} >
                  <div className="bbc_elem1_txt1">Mi membresia</div>
                    <hr className="line" style={{height:"2px"}} />
                    <div className="bbc_elem1_bottom">
                      <img style={{height:"5rem",margin:"1.5rem 0rem"}} src="/icons/gold-medal.png" alt="" />
                      <div className="planes_min_title_jk">BTC 1000</div>
                      <div className="planes_min_title_jk">1000 USDT-TRC20</div>
                    </div>
              </div>
              </>
            }
            { s4 &&
              <>
              <div className="tab_title" style={{color:"white",fontSize:"20px",fontWeight:"500",margin:"0 0 1rem 0"}} >Benefit Plans</div>
              <div className="bal_bottom_con">
                <div className="planes_mini_con" style={{color:"white"}} >
                  <div className="bbc_elem1_txt1">PRO PACKAGE</div>
                    <div className="bbc_elem1_txt2">0 en Total</div>
                    <hr className="line" style={{height:"2px"}} />
                    <div className="bbc_elem1_bottom">
                      <img style={{height:"5rem",margin:"1.5rem 0rem"}} src="/icons/silver-medal.png" alt="" />
                      <div className="planes_min_title_jk">2000 to 9999</div>
                      <div className="planes_min_title_btn">COMPRAR</div>
                    </div>
                </div>
                <div className="planes_mini_con" style={{color:"white"}} >
                  <div className="bbc_elem1_txt1">PREMIUM PACKAGE</div>
                    <div className="bbc_elem1_txt2">0 en Total</div>
                    <hr className="line" style={{height:"2px"}} />
                    <div className="bbc_elem1_bottom">
                      <img style={{height:"5rem",margin:"1.5rem 0rem"}} src="/icons/gold-medal.png" alt="" />
                      <div className="planes_min_title_jk">10000+</div>
                      <div className="planes_min_title_btn">COMPRAR</div>
                    </div>
                </div>
                {/* <div className="planes_table" style={{border:"2px solid #ffab40cc",backgroundColor:"#6633991a",borderRadius:"10px",height:"10rem",width:"91%",color:"white"}} >
                  <table>
                    <tr>
                        <th>Estrategia</th>
                        <th>Capital Initial</th>
                        <th>Ganacia actual</th>
                        <th>Balance total</th>
                        <th>Ginancia Retiradas</th>
                        <th>Total disponible</th>
                    </tr>
                    <tr>
                        <td>{ userdata.estrategia }</td>
                        <td>{ userdata.initialcapital }</td>
                        <td>{ userdata.grancias}</td>
                        <td>{ userdata.totalbalance }</td>
                        <td>{ userdata.ganaciasretirades }</td>
                        <td>{ userdata.totaldisponible }</td>
                    </tr>
                    
                    <tr>
                        <td></td>
                        <td>{ userdata.initialcapital }</td>
                        <td>{ userdata.grancias}</td>
                        <td>{ userdata.totalbalance }</td>
                        <td>{ userdata.ganaciasretirades }</td>
                        <td>{ userdata.totaldisponible }</td>
                    </tr>
                  </table>
                </div> */}
              </div>
              </>
            }
            { s5 &&
              <>
              <div className="tab_title" style={{color:"white",fontSize:"20px",fontWeight:"500",margin:"0 0 1rem 0"}} >Bonus</div>
                <div className="bonus_table" style={{border:"2px solid #ffab40cc",backgroundColor: "#6633991a",borderRadius:"10px",minHeight:"10rem",width:"91%",color:"white"}} >
                  <table>
                    <tr>
                        <th></th>
                        <th>Por mes</th>
                        <th>Por ano (2023)</th>
                        <th>Acumulado</th>
                    </tr>
                    <tr>
                        <td>Bono de incio</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                    </tr>   
                    <tr>
                        <td>Bono de derivados</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>Bono de funding</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td>Bono de rango</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                    </tr>
                  </table>
                </div>
              </>
            }
            { s6 &&
              <>
              <div className="tab_title" style={{color:"white",fontSize:"20px",fontWeight:"500",margin:"0 0 1rem 0"}} >Red</div>
              <div className="red_dash">
                <div className="red_dash_elem1 flex-c" style={{width:"6rem",height:"8rem"}} >
                  <img src="/icons/bitcoin.png" className='flex' style={{height:"3rem"}} alt="" />
                </div>
                <div className="red_dash_elem2" style={{width:"18rem",height:"8rem",marginRight:"10%",display:"flex",justifyContent:"center",flexDirection:"column"}} >
                  <h5>Cryptotrader</h5>
                  <div>PIC: { userdata.pic }</div>
                  <div>TC: { userdata.tc } </div>
                </div>
                <div className="red_dash_elem3 flex-c">
                  <div>Membrecia BTC</div>
                  <div>500: { userdata.membreciabtc500 }</div>
                </div>
                <div className="red_dash_elem3 flex-c">
                  <div>Membrecia BTC</div>
                  <div>1000: { userdata.membreciabtc1000 }</div>
                </div>
                <div className="red_dash_elem3 flex-c">
                  <div>Miembros</div>
                  <div>totales: { userdata.miembrostotale }  </div>
                </div>                
              </div>     
              <div className="bbc_elem3" style={{marginTop:"20px"}} >
                    <div className="bbc_elem1_txt1">Liquidez</div>
                    <hr className="line" style={{height:"2px"}} />
                    <div className='flex' style={{height:"78%",width:"100%",flexDirection:"column"}} > 
                      <div className="member_elem member_row_bg ">
                        <div className="member_title1">Membros <br /> Totale</div>
                        <div className="member_value">{ userdata.miembrostotale }</div>
                      </div>
                      <div className="member_elem">
                        <div className="member_title1">Derivados <br /> Total</div>
                        <div className="member_value"> { userdata.derivadostotale } </div>
                      </div>
                      <div className="member_elem member_row_bg ">
                        <div className="member_title1">Membros <br /> Total</div>
                        <div className="member_value">{ userdata.rangostotale }</div>
                      </div>
                      <div className="member_elem">
                        <div className="member_title1">Ultimo rango <br /> Total</div>
                        <div className="member_value">{ userdata.ultimorango }</div>
                      </div>
                    </div>
                  </div>         
              </>
            }
            { s7 &&
              <>
                <div className="tab_title" style={{color:"white",fontSize:"20px",fontWeight:"500",margin:"0 0 1rem 0"}} >Add User</div>
                <div className="bal_bottom_con">
                  <div className="planes_mini_con" style={{color:"white"}} >
                    <div className="bbc_elem1_txt1">FREE PACKAGE</div>
                      <div className="bbc_elem1_txt2">0 en Total</div>
                      <hr className="line" style={{height:"2px"}} />
                      <div className="bbc_elem1_bottom">
                        <img style={{height:"5rem",margin:"1.5rem 0rem"}} src="/icons/badge.png" alt="" />
                        <div className="planes_min_title_jk">0.00 USDT-TRC20</div>
                        <div className="planes_min_title_btn">COMPRAR</div>
                      </div>
                  </div>
                  <div className="planes_mini_con" style={{color:"white"}} >
                    <div className="bbc_elem1_txt1">BASIC PACKAGE</div>
                      <div className="bbc_elem1_txt2">0 en Total</div>
                      <hr className="line" style={{height:"2px"}} />
                      <div className="bbc_elem1_bottom">
                        <img style={{height:"5rem",margin:"1.5rem 0rem"}} src="/icons/silver-medal.png" alt="" />
                        <div className="planes_min_title_jk">2000 to 9999</div>
                        <div className="planes_min_title_btn">COMPRAR</div>
                      </div>
                  </div>
                  <div className="planes_mini_con" style={{color:"white"}} >
                    <div className="bbc_elem1_txt1">STANDARD PACKAGE</div>
                      <div className="bbc_elem1_txt2">0 en Total</div>
                      <hr className="line" style={{height:"2px"}} />
                      <div className="bbc_elem1_bottom">
                        <img style={{height:"5rem",margin:"1.5rem 0rem"}} src="/icons/gold-medal.png" alt="" />
                        <div className="planes_min_title_jk">10000+</div>
                        <div className="planes_min_title_btn">COMPRAR</div>
                      </div>
                  </div>
                <form className="signup signup_plc_col" onSubmit={handleSubmit} style={{minHeight:"30rem",width:"100%",border:"1.5px solid #ffab40cc",backgroundColor: "#6633991a",paddingBottom:"1.5rem"}} >
                  { registeredSuccessfully &&
                      <div className='sign_up_success_msg'>
                          User Registered Successfully
                      </div>
                  }
                  { alreadyRegistered &&
                      <div className='sign_up_already_exist_msg'>
                          Email already Registered
                      </div>
                  }
                <div className="form_head_title">Enter Member Data</div>
                <label htmlFor="name"><div className="form_title">Username</div></label>
                <input
                  type="text"
                  placeholder="Username"
                  autoCorrect="false"
                  id="name"
                  name="name"
                  autoComplete="off"
                  spellCheck='false'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="s_form_input"
                  style={{backgroundColor: "#e9e9e912"}}
                />
                <div className="error_para">{ errors.name && touched.name ? errors.name : null}</div>

                <label htmlFor="email"><div className="form_title">Email</div></label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  value={values.email}
                  className="s_form_input"
                  spellCheck='false'
                  style={{backgroundColor: "#e9e9e912"}}
                />
                  <div className="error_para">{errors.email && touched.email ?errors.email:null}</div>

                <label htmlFor="password"><div className="form_title">Password</div></label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  spellCheck='false'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="s_form_input"
                  style={{backgroundColor: "#e9e9e912"}}
                />
                <div className="error_para">{errors.password && touched.password ? errors.password:null}</div>

                <label htmlFor="confirmpassword"><div className="form_title">Confirm Password</div></label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmpassword"
                  autoComplete="off"
                  spellCheck='false'
                  name="confirmpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  className="s_form_input"
                  style={{backgroundColor: "#e9e9e912"}}
                />
                <div className="error_para">{ errors.confirmpassword && touched.confirmpassword? errors.confirmpassword:null}</div>

                <label htmlFor="Birthday"><div className="form_title">Birthday</div></label>
                <input
                  type="date"
                  id="Birthday"
                  name="birthday"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  spellCheck='false'
                  value={values.birthday}
                  className="s_form_input"
                  style={{backgroundColor: "#e9e9e912",color:"white"}}
                />
                <div className="error_para">{errors.birthday && touched.birthday ? errors.birthday:null}</div>
                {/* <input type="submit" className="submit_form" /> */}
                
                { !loading && <input type="submit" className='submit_form' style={{cursor:"pointer"}} />}
                
                { loading &&
                  <div type="submit" className='submit_form' style={{display:"flex",justifyContent:"center"}} >
                    <div class="spinner-border" role="status" style={{width:"1.5rem",height:"1.5rem",fontSize:"9px"}} ></div>
                  </div>
                }
                  {/* <NavLink to='/login' className='already_member'> <div className="already_member_element" >Already a member?</div> </NavLink> */}
                      </form>
                </div>
              </>
            }
          </div>
        </div>
      </section>
    </>
  )
}
export default Dashboard

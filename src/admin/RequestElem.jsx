import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
function RequestElem({val,ind,getwithdrawalReq}) {
    const [ userData , setuserData ] = useState({});
    const deleteWithdrawReq = async ()=>{
        const res = await fetch(`https://server.multiplataforma-capital.com/deleteWithdrawReq/${userData._id}`,{
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type":"application/json"
            }
            });
            const data = await res.json();
            if(data.msg == "success")
            {
                console.log("Deleted Successfuly");
                getwithdrawalReq();
            }
    }
    const alluserfun = async ()=>{
        const res = await fetch(`https://server.multiplataforma-capital.com/userData/${val._id}`,{
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
          }
          });
          const data = await res.json();
          setuserData(data.msg);
          console.log(userData);
      }
      useEffect(()=>{
        alluserfun();
      },[])
  return (
    <>
        <NavLink to={`/useredit/${userData._id}`} style={{margin: "10px 0",color:"black",position:"relative",border:"1px solid #9acd325c",height:"3rem",display:"flex",alignItems:"center",borderRadius:"13px",backgroundColor: "#9acd325c"}}>
            <div style={{fontSize:"18px",margin:"0 20px"}}>Amount: $<span style={{fontWeight:"600"}} >{val.withdraw} </span></div>
            <div style={{fontSize:"18px",margin:"0 20px"}}>Name: <span style={{fontWeight:"600"}} > {userData.name} </span></div>
            <div style={{fontSize:"18px",margin:"0 20px"}}>Email: <span style={{fontWeight:"600"}}> { userData.email } </span></div>
            {/* <div style={{fontSize:"18px",margin:"0 20px"}}>Delete Request</div> */}
            <svg style={{height:"2rem",fill:"#ff5f5f",position:"absolute",right:"20",cursor:"pointer"}} onClick={()=>deleteWithdrawReq()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
        </NavLink>
    </>
  )
}

export default RequestElem

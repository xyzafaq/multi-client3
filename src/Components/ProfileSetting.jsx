import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './ProfileSetting.css'

function ProfileSetting() {
  let date;
    const [userData,setUserData] = useState({});
    // const [loading,setLoading] = useState(false);
    // const getData = async ()=>{
    //     setLoading(true);
    //     const res = await fetch('/userData',{
    //         method: "GET",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type":"application/json"
    //         },
    //         credentials: "include"
    //     });
    //     const data = await res.json();
    //     setLoading(false)
    //     // console.log(data);
    //     setUserData(data);
    // }
    // useEffect(()=>{
    //     getData();
    // },[])
    const [ myForm, setmyForm ] = useState({
      fullname: "",
      bankname:"",
      iban:"",
      phone:"",
      country:""
  });
function handleSubmit(e){
  e.preventDefault();
  console.log(myForm);
  const submitform = async () => {
      const res = await fetch("http://server.multiplataforma-capital.com/bankinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myForm),
      });
      const data = await res.json();
      if( data.msg === 'success' ){
        console.log("Updated Successfuly");
      }else{
        console.log("user not found");
      }
    };
    submitform();
}
function handleChange(e){
  const { value ,name } = e.target;
  setmyForm({
      ...myForm,
      [name] : value,
  })
}
const getData = async ()=>{
  const res = await fetch('/userData',{
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type":"application/json"
    },
    credentials: "include"
    });
    const data = await res.json();
    setUserData(data)
    setmyForm({
      fullname: data.fullname,
      bankname:data.bankname,
      iban:data.iban,
      phone:data.phone,
      country:data.country
    })
}
useEffect(()=>{
  getData();
},[])
  return (
    <>
    {/* { loading &&
            <div className="reloading_page" style={{marginTop:"12rem"}} >
              <div class="spinner-border reloading" role="status">
              
              </div>          
            </div>
    } */}
    
      <div className="signup" style={{height:"91vh",width:"100%",margin:"auto",border:"none",display:"flex",alignItems:"center",flexDirection:"column",borderRadius:"0px",backgroundColor:"#19191E"}} >
        <div className="form_head_title" style={{color:"#ffab40"}} >Profile Information</div>
        <div className="ps_line_container">
            <div className="ps_line_child_left"> Username: </div>
            <div className="ps_line_child_right" > {userData.name } </div>
        </div>
        <div className="ps_line_container">
            <div className="ps_line_child_left">Email: </div>
            <div className="ps_line_child_right"> {userData.email} </div>
        </div>
        <div className="ps_line_container">
            <div className="ps_line_child_left">Date of Birth: </div>
            <div className="ps_line_child_right"> {userData.birthday  } </div>
        </div>
        <div className="ps_line_container">
            <div className="ps_line_child_left">Member Since: </div>
            <div className="ps_line_child_right"> {userData.RegisteredDate  } </div>
        </div>
        <div className="bottom_bank_con" style={{width: "26rem"}} >        
        <div className="form_head_title" style={{color:"#ffab40",margin:"10px 0 -11px 0"}} >Bank Information</div>
        <form  onSubmit={handleSubmit}>
          <label htmlFor="name"><div className="form_title" style={{color:"#898989e8",marginTop: "4px"}} >Full Name</div></label>
          <input type="text" autoCorrect="false" name="fullname" autoComplete="off" spellCheck="false" onChange={handleChange}
                   value={myForm.fullname} className="s_form_input admin_554" style={{height:"2rem"}} />

          <label htmlFor="name"><div className="form_title" style={{color:"#898989e8",marginTop: "4px"}} >Bank Name</div></label>
          <input type="text" autoCorrect="false" name="bankname" autoComplete="off" spellCheck="false" onChange={handleChange}
                 value={myForm.bankname} className="s_form_input admin_554" style={{height:"2rem"}} />
          
          <label htmlFor="name"><div className="form_title" style={{color:"#898989e8",marginTop: "4px"}} >IBAN</div></label>
          <input type="text" autoCorrect="false" name="iban" autoComplete="off" spellCheck="false" onChange={handleChange}
                 value={myForm.iban} className="s_form_input admin_554" style={{height:"2rem"}} />
          
          <label htmlFor="name"><div className="form_title" style={{color:"#898989e8",marginTop: "4px"}} >Phone Number</div></label>
          <input type="number" autoCorrect="false" name="phone" autoComplete="off" spellCheck="false" onChange={handleChange}
                 value={myForm.phone} className="s_form_input admin_554" style={{height:"2rem"}} />
          
          <label htmlFor="name"><div className="form_title" style={{color:"#898989e8",marginTop: "4px"}} >Country</div></label>
          <input type="text" autoCorrect="false" name="country" autoComplete="off" spellCheck="false" onChange={handleChange}
                 value={myForm.country} className="s_form_input admin_554" style={{height:"2rem"}} />

          <div style={{margin: "10px"}} className="flex" ><input type="submit" className="s_form_input" style={{width:"7rem"}} value="update"/></div>
        </form>
        </div>
      </div>
    </>
  )
}

export default ProfileSetting

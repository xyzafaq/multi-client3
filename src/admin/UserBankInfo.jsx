import React, { useState , useEffect }  from 'react'

function UserBankInfo({id}) {
    const [userData,setUserData] = useState({});
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
      const res = await fetch("https://server.multiplataforma-capital.com/bankinfo", {
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
  const res = await fetch(`https://server.multiplataforma-capital.com/getuserdata/${id}`,{
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type":"application/json"
    },
    credentials: "include"
    });
    const data = await res.json();
    setUserData(data)
    console.log(userData);
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
      <div className="form_head_title" style={{color:"#ffab40",margin:"10px 0 -11px 0"}} >Bank Information</div>
        <form  onSubmit={handleSubmit} style={{padding:"0 30%"}} >
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

          {/* <div style={{margin: "10px"}} className="flex" ><input type="submit" className="s_form_input" style={{width:"7rem"}} value="update"/></div> */}
        </form>  
    </>
  )
}

export default UserBankInfo

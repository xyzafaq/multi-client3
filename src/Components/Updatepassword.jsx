import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function UpdatePassword() {
    const Navigate = useNavigate();
    const [updatesuccess,setupdateSuccess] = useState(false);
    const [updateFail,setupdateFail] = useState(false);
    const [errorMsg,seterrorMsg] = useState('');

    const [loading,setLoading] = useState(false);
    const [password, setpassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleSubmit =async (e)=> {
    e.preventDefault();
    setLoading(true);
    console.log(password);
    const res = await fetch(`https://server.multiplataforma-capital.com/updatePassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
      });
      setLoading(false);
      const data = await res.json();
      console.log(data);
      if(data.msg === "unfill"){
        seterrorMsg('Incomplete Form')
        setupdateFail(true);
        setupdateSuccess(false);

        setTimeout(() => {
          setupdateFail(false);
          setupdateSuccess(false);
        }, 3000);
      }else if(data.msg==='NotMatching'){
        seterrorMsg('Passwords are not matching')
        setupdateFail(true);
        setupdateSuccess(false);

        setTimeout(() => {
          setupdateFail(false);
          setupdateSuccess(false);
        }, 3000);
      }else if(data.msg==='Password must contain 8 characters'){
        seterrorMsg('Password must contain 8 characters')
        setupdateFail(true);
        setupdateSuccess(false);

        setTimeout(() => {
          setupdateFail(false);
          setupdateSuccess(false);
        }, 3000);
      }else if(data.msg==='incorrect Password'){
        seterrorMsg('incorrect Password')
        setupdateFail(true);
        setupdateSuccess(false);

        setTimeout(() => {
          setupdateFail(false);
          setupdateSuccess(false);
        }, 3000);
      }else if(data.msg==='success'){
        seterrorMsg('Password Changed Successfuly')
        setupdateFail(false);
        setupdateSuccess(true);
        setpassword({
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          });

        setTimeout(() => {
          setupdateFail(false);
          setupdateSuccess(false);
          Navigate('/');
        }, 2000);
      }
      else{

        };
  }
  function handleChange(e) {
    const { value, name } = e.target;
    setpassword({
      ...password,
      [name]: value,
    });
  }
//   useEffect(()=>{
//     const getHome = async ()=>{
//       try {
//         const res = await fetch('/profile',{
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type":"application/json"
//           },
//           credentials: "include"
//         });
//         const data = await res.json();
//         console.log(data);
//         console.log(res.status);
//         if(res.status !== 200){
//           const error = new Error(res.error);
//           throw error;
//         }else{
//           setLoading(false);
//         }
//         console.log("Authenticate User");
//       } catch (error) {
//         console.log(error);
//         Navigate('/login');
//       } 
//       }
//     getHome();
//   })
  return (
    <>
            <div className="s_form_parent" >
              <form className="signup" style={{width:"25rem",minHeight:"26rem"}} onSubmit={handleSubmit}>
                { updatesuccess &&
                    <div className='sign_up_success_msg' >
                        {errorMsg}
                    </div>
                }
                { updateFail &&
                    <div className='sign_up_already_exist_msg'>
                        {errorMsg}
                    </div>
                }
                <div className="form_head_title" style={{marginTop:"26px"}} >Reset Password</div>
                <label htmlFor="name">
                  <div className="form_title">Old Password</div>
                </label>
                <input
                  type="text"
                  placeholder="Old password"
                  autoCorrect="false"
                  name="oldPassword"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleChange}
                  //   onBlur={Formik.handleBlur}
                  value={password.oldPassword}
                  className="s_form_input"
                />

                <label htmlFor="name">
                  <div className="form_title">New Password</div>
                </label>
                <input
                  type="text"
                  placeholder="New password"
                  autoCorrect="false"
                  name="newPassword"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleChange}
                  //   onBlur={Formik.handleBlur}
                  value={password.newPassword}
                  className="s_form_input"
                />

                <label htmlFor="name">
                  <div className="form_title">Confirm New Password</div>
                </label>
                <input
                  type="text"
                  placeholder="Confirm new password"
                  autoCorrect="false"
                  name="confirmNewPassword"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleChange}
                  //   onBlur={Formik.handleBlur}
                  value={password.confirmNewPassword}
                  className="s_form_input"
                />

                { !loading &&
                    <input type="submit" className='submit_form' style={{marginBottom:"2rem"}} />
                }
                { loading &&
                    <div type="submit" className='submit_form' style={{display:"flex",justifyContent:"center",marginBottom:"2rem"}} >
                        <div class="spinner-border" role="status" style={{width:"1.5rem",height:"1.5rem",fontSize:"9px"}} ></div>
                    </div>
                }
              </form>
              </div>
              <svg className='form_cross' onClick={()=>Navigate('/')} style={{position:"absolute",top:"30",right:"40",fill:"white",height:"2.5rem",zIndex:"10",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    </>
  );
}

export default UpdatePassword
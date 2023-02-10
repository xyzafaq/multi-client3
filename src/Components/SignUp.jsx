import React from "react";
import * as Yup from 'yup';
import { NavLink , useNavigate } from "react-router-dom";
// import { useState } from "react";
import "./Signup.css";
import { useFormik } from 'formik';
import { useState,useContext } from "react";
// import { useEffect } from "react";
// import { userloggedIn } from "./Context/Context";
function SignUp() {
  // const { userlogged,setuserLogged } = useContext(userloggedIn);  
  const Navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  window.scrollTo(0, 0);
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
        console.log(values);
        const submitform = async () => {
            const res = await fetch("https://server.multiplataforma-capital.com/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            const data = await res.json();
            console.log(data);
            setLoading(false);
            if(data.msg === 'User Already Registered'){
                console.log(data);
                setAlreadyRegistered(true);
                setRegisteredSuccessfully(false);
                
                setTimeout(() => {
                    setAlreadyRegistered(false);
                    setRegisteredSuccessfully(false);
                }, 5000);
            }
            if(data.msg==='User Registered Successfuly.'){
                // setuserLogged(true);
                setAlreadyRegistered(false);
                setRegisteredSuccessfully(true);
                Navigate('/login');
                setTimeout(() => {
                  setAlreadyRegistered(false);
                  setRegisteredSuccessfully(false);
              }, 5000);
            }
          };
          submitform();
    },
    });
    // console.log(errors);
  return (
    <>
      <div className="s_form_parent">
        <form className="signup" onSubmit={handleSubmit} style={{height:"35rem"}} >
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
          <div className="form_head_title">Sign Up</div>
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
          />
          <div className="error_para">{errors.birthday && touched.birthday ? errors.birthday:null}</div>
          {/* <input type="submit" className="submit_form" /> */}
          
          { !loading && <input type="submit" className='submit_form' style={{cursor:"pointer"}} />
          }
          { loading &&
            <div type="submit" className='submit_form' style={{display:"flex",justifyContent:"center"}} >
              <div class="spinner-border" role="status" style={{width:"1.5rem",height:"1.5rem",fontSize:"9px"}} ></div>
            </div>
          }
            <NavLink to='/login' className='already_member'> <div className="already_member_element" >Already a member?</div> </NavLink>
        </form>
      </div>
      <svg className='form_cross' onClick={()=>Navigate('/')} style={{position:"absolute",top:"30",right:"40",fill:"white",height:"2.5rem",zIndex:"10",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    </>
  );
}
export default SignUp;

import React from 'react'
import { NavLink } from 'react-router-dom'

function SearchedUser({value,index}) {

  return (
    <>
         <NavLink to={`/useredit/${value._id}`} style={{color: "#972727",textDecoration:"none"}}  >
         <div className="search_user_con flex" style={{color:"#234b15",backgroundColor: "#e9e9e9",cursor:"pointer",borderRadius: "14px",height:"4rem",flexDirection:"column",padding:"10px 20px"}} >
            <div> {value.name} </div>
            <div style={{color: "#972727",textDecoration:"none"}} > { value.email } </div>
        </div>
         </NavLink>
    </>
  )
}

export default SearchedUser

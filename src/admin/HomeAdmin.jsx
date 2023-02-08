import React,{ useState ,useEffect } from "react";
import SearchedUser from "./SearchedUser";

function HomeAdmin() {

    const [searchUser,setsearchUser] = useState({});
    const [alluser,setalluser] = useState([]);

    const [ myForm, setmyForm ] = useState({
        email: "",
    });
  function handleSubmit(e){
    e.preventDefault();
    console.log(myForm);
    const submitform = async () => {
        const res = await fetch(`https://server.multiplataforma-capital.com/searchUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myForm),
        });
        const data = await res.json();
        if( data.msg === 'success' ){
          // setShowSearchUser(true)
          // console.log(data.userdata);
          // setsearchUser(data.userdata[0]);
          // console.log(searchUser);
        }else{
          console.log("user not found");
        }
        // console.log(data);
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
const alluserfun = async ()=>{
    const res = await fetch('https://server.multiplataforma-capital.com/allUser',{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      credentials: "include"
      });
      const data = await res.json();
      if(data){
        console.log(data);
        setalluser(data)
        console.log(alluser);
      }
  }
  useEffect(()=>{
    alluserfun();
  },[])

  return (
    <>
      <div>
        <div
          className="admin_1_above flex" style={{ border: "2px solid #d2d2d23d", height: "3rem" }}>
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter email"
              autoCorrect="false"
              name="email"
              autoComplete="off"
              spellCheck="false"
              onChange={handleChange}
              value={myForm.title}
              className="s_form_input admin_554"
              style={{
                color: "black",
                background: "none",
                marginRight: "10px",
                marginRight: "10px",
                borderRadius: "40px",
                height: "2rem",
                paddingLeft: "1rem",
              }}
            />
            <input
              type="submit"
              className="s_form_input"
              value="Search"
              style={{
                merginLeft: "10px",
                borderRadius: "17px",
                width: "5rem",
                padding: "1px 8px",
              }}
            />
          </form>
        </div>
        <div style={{display: "flex",flexWrap:"wrap",justifyContent:"center",justifyContent: "center",alignItems: "center",paddingTop: "1rem",gap: "10px",}}>
          {alluser.map((value, index) => {
            return (
              <>
                <SearchedUser value={value} index={index} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default HomeAdmin;
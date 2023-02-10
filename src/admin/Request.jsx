import React,{useState,useEffect} from 'react'
import RequestElem from './RequestElem';

function Request() {
    const [ requests, setrequests ] = useState([]);
    const getwithdrawalReq = async ()=>{
        const res = await fetch('https://server.multiplataforma-capital.com/AllwithdrawalRequests',{
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
          }
          });
          const data = await res.json();
          if(data){
            setrequests( data.msg );
            console.log(requests);
          }
      }
      useEffect(()=>{
        getwithdrawalReq();
      },[])
  return (
    <>
        <section>
            <div onClick={getwithdrawalReq} >Withdrawals Requests</div>
            {  requests.map((val,ind)=>{
                return(<>
                    <RequestElem val={val} ind={ind} getwithdrawalReq={getwithdrawalReq} />
                </>)
            })

            }
        </section>

    </>
  )
}

export default Request

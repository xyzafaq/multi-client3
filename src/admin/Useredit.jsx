import React , { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserBankInfo from './UserBankInfo';

function Useredit() {
    const { id } = useParams();
    const [ myForm, setmyForm ] = useState({
        name:"",
        email:"",
        totalbalance:0,
        ppstart:0,
        ppadvance:0,
        pppro:0,
        initialcapital:0,
        grancias:0,
        bloqueado:0,
        disponible:0,
        miembrostotale:0,
        derivadostotale:0,
        rangostotale:0,
        ultimorango:0,
        saldo:0,
        cartera:"",
        mymembresia:"",
        estrategia:"",
        ganaciasretirades:0,
        totaldisponible:0,
        pic:0,
        tc:0,
        membreciabtc500:0,
        membreciabtc1000:0
    });
    useEffect(()=>{
        const getData = async ()=>{
            const res = await fetch('https://server.multiplataforma-capital.com/getuserdata',{
              method: "POST",
              headers: {
                "Content-Type":"application/json",
              },
              body: JSON.stringify({id:id})
            });
            const data = await res.json();
            if(data){
                console.log(data);
              setmyForm({
                name:data.name,
                email:data.email,
                totalbalance:data.totalbalance,
                ppstart:data.ppstart,
                ppadvance:data.ppadvance,
                pppro:data.pppro,
                initialcapital:data.initialcapital,
                grancias:data.grancias,
                bloqueado:data.bloqueado,
                disponible:data.disponible,
                miembrostotale:data.miembrostotale,
                derivadostotale:data.derivadostotale,
                rangostotale:data.rangostotale,
                ultimorango:data.ultimorango,
                saldo:data.saldo,
                cartera:data.cartera,
                mymembresia:data.mymembresia,
                estrategia:data.estrategia,
                ganaciasretirades:data.ganaciasretirades,
                totaldisponible:data.totaldisponible,
                pic:data.pic,
                tc:data.tc,
                membreciabtc500:data.membreciabtc500,
                membreciabtc1000:data.membreciabtc1000
            });
            }
        }  
        getData();
    },[])
  function handleSubmit(e){
    e.preventDefault();
    console.log(myForm);
    const submitform = async () => {
        const res = await fetch(`https://server.multiplataforma-capital.com/updateUser/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myForm),
        });
        const data = await res.json();
        if( data.msg === 'success' ){
            console.log("Updated Successfully");
        //   setShowSearchUser(true)
        //   console.log(data.userdata);
        //   setsearchUser(data.userdata[0]);
        //   console.log(searchUser);
        }else{
        //   console.log("user not found");
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

  return (
    <>
    <div style={{width:"100%"}} >
        <form style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%"}} onSubmit={handleSubmit}>
            <div style={{margin:"0 10px"}} >
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Username</div></label>
                    <input type="text" autoCorrect="false" name="name" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.name} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Email</div></label>
                    <input type="text" autoCorrect="false" name="email" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.email} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Total Balance</div></label>
                    <input type="number" autoCorrect="false" name="totalbalance" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.totalbalance} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >PP Start</div></label>
                    <input type="number" autoCorrect="false" name="ppstart" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.ppstart} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >PP Advance</div></label>
                    <input type="number" autoCorrect="false" name="ppadvance" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.ppadvance} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >PP Pro</div></label>
                    <input type="number" autoCorrect="false" name="pppro" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.pppro} className="s_form_input admin_554" />
            </div>
            <div style={{margin:"0 10px"}} >
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Initial Capital</div></label>
                    <input type="number" placeholder="Initial Capital" autoCorrect="false" name="initialcapital" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.initialcapital} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Grancias</div></label>
                    <input type="number" autoCorrect="false" name="grancias" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.grancias} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Bloque Ado</div></label>
                    <input type="number" autoCorrect="false" name="bloqueado" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.bloqueado} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Disponible</div></label>
                    <input type="number" autoCorrect="false" name="disponible" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.disponible} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Miembros Totale</div></label>
                    <input type="number" autoCorrect="false" name="miembrostotale" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.miembrostotale} className="s_form_input admin_554" />
                <label htmlFor="number"><div className="form_title" style={{color:"#898989e8"}} >Derivados Totale</div></label>
                    <input type="text" autoCorrect="false" name="derivadostotale" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.derivadostotale} className="s_form_input admin_554" />
            </div>
            <div style={{margin:"0 10px"}} >
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Rangos Totale</div></label>
                    <input type="number" autoCorrect="false" name="rangostotale" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.rangostotale} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Ultimo Rango</div></label>
                    <input type="number" autoCorrect="false" name="ultimorango" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.ultimorango} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Saldo</div></label>
                    <input type="number" autoCorrect="false" name="saldo" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.saldo} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Cartera</div></label>
                    <input type="text" autoCorrect="false" name="cartera" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.cartera} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >My Membresia</div></label>
                    <input type="text" autoCorrect="false" name="mymembresia" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.mymembresia} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Estrategia</div></label>
                    <input type="text" autoCorrect="false" name="estrategia" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.estrategia} className="s_form_input admin_554" />
            </div>   
            <div style={{margin:"0 10px"}} >
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Ganciasretirades</div></label>
                    <input type="number" autoCorrect="false" name="anciasretirades" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.ganciasretirades} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Total Disponible</div></label>
                    <input type="number" autoCorrect="false" name="totaldisponible" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.totaldisponible} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >PIC</div></label>
                    <input type="number" autoCorrect="false" name="pic" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.pic} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >TC</div></label>
                    <input type="number" autoCorrect="false" name="tc" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.tc} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Mebreciabtc500</div></label>
                    <input type="number" autoCorrect="false" name="membreciabtc500" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.membreciabtc500} className="s_form_input admin_554" />
                <label htmlFor="name"><div className="form_title" style={{color:"#898989e8"}} >Mebreciabtc1000</div></label>
                    <input type="number" autoCorrect="false" name="membreciabtc1000" autoComplete="off" spellCheck="false" onChange={handleChange}
                        value={myForm.membreciabtc1000} className="s_form_input admin_554" />
            </div>         
                <div style={{margin: "10px"}} ><input type="submit" className="s_form_input" value="update"/></div>
        </form>
        
    </div>
    {/* <div className="form_head_title" style={{color:"#ffab40",margin:"10px 0 -11px 0"}} >Bank Information</div>
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

          <div style={{margin: "10px"}} className="flex" ><input type="submit" className="s_form_input" style={{width:"7rem"}} value="update"/></div>
        </form>         */}
        <UserBankInfo id={id} />
    </>
  )
}

export default Useredit
    
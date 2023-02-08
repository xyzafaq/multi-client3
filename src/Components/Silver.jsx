import React from 'react'
import './Silver.css'
import {NavLink ,useNavigate} from 'react-router-dom'

function Silver() {
    const navigate = useNavigate;
  return (
    <>
      <section>
        <div className="checkout_s1">
            <div className="checkout_parent">
                <div className="checkout_txt1">Finalización de compra</div>
                <hr className='line' />
                <div className="checkout_bottom" style={{display:"grid",gridTemplateColumns:"60% 40%",height: "95%"}} >
                    <div className="checkout_bottom_left">
                        <div className="bottom_left_txt1" >Registrarse</div>
                        <div className="bottom_left_txt2">Para comprar este plan y utilizar sus beneficios en el futuro, inicia sesión en tu cuenta o regístrate.</div>
                        <div className="bottom_left_btn_con">
                            <NavLink to='/signup' className="bottom_left_btn1" style={{textDecoration:"none"}} >Registrarse</NavLink>
                            <NavLink to='/login' className="bottom_left_btn2" style={{textDecoration:"none"}}  >Iniciar Sesión</NavLink>
                        </div>
                    </div>
                    <div className="checkout_bottom_right">
                        <div className="checkout_right_box">
                            <div className="bottom_left_txt1" style={{fontSize:"24px"}} >Resumen del pedido</div>
                            <div className="bottom_right_txt2" style={{marginTop:"20px"}} > <span>Plan</span> <span style={{float:"right"}} >Memebresia plata</span> </div>
                            <div className="bottom_right_txt3" style={{marginTop:"10px"}} >  <span>Duración</span> <span style={{float:"right"}} >2 años</span> </div>
                            <hr className='line' style={{marginTop:"35px"}} />
                            <div className="bottom_right_txt4" style={{margin: "16px 0px",textDecoration:"underline",cursor:"pointer",display:"flex",alignItems:"center"}}>
                                <svg style={{height:"1.8rem",marginRight:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
                            Ingresar un código</div>
                            <hr className='line' style={{marginBottom:"20px"}} />
                            <div className="bottom_right_txt5" style={{fontSize:"24px",fontWeight: "400"}} ><span>Total</span> <span style={{float:"right"}} >5000 MXN</span> </div>
                            <div className="bottom_right_txt6"><span style={{float:"right",color:"#000000a1"}} >por año</span> </div>
                            <div className="bottom_right_txt7" style={{marginTop:"36px"}} >Se te cobrará anualmente durante 2 años.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Silver

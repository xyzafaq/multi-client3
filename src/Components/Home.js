import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.css'
import './About.css'

function Home() {
    const [Arrowcolor,setArrowcolor] = useState(false);

  return (
    <>
        <section className='home_parent' >
            <div className="home_s1" >
                <div className="h1_shadow">
                    <div className="h1_txt1">ACCESS OUR <br /> <span> EXCLUSIVE-PLATFORM </span> <br /> AND BECOME PART OF <br /> OUR COMMUNITY </div>
                    <div className="h1_txt2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ab suscipit beatae adipisci.</div>
                    <br /> <br />
                    <div className="h1_txt3">Earn up to 10x the interest of CDs today.</div>
                    <NavLink to='/signup' style={{color:"white",textDecoration:"none",width:"9rem"}} className='start_btn_link' >
                        <div className="shadow_btn" onMouseEnter={()=>setArrowcolor(true)} onMouseLeave={()=>setArrowcolor(false)} >GET STARTED
                        <svg xmlns="http://www.w3.org/2000/svg" style={{fill:Arrowcolor?'#be710f':''}} viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                        </div>
                    </NavLink>  
                </div>
            </div>  
            <div className="home_s2">
                <div className="h2_txt1">Bienvenido a <br /> Multiplataforma Capital</div>
                <div className="h2_txt2">Conoce grandes oportunidades</div>
                <Rotate>
                <div className='flex' style={{margin:"3rem 0"}} ><img src="/images/coin2.png" alt=""/></div>
                </Rotate>
                <div className="h2_txt3">Todo sobre multiplataformacapital</div>
                <div className="h2_txt4">Multiplataforma Capital es un exclusivo Club Privado que ha creado un modelo basado en tecnología blockchain que <br /> recompensa a sus miembros con beneficios a través de servicios especializados en cripto arbitraje.</div>
            </div>
            <div className='home_s3' >
                <div className="home_s3_left">
                        <Fade top >
                        <div className="home_s3_left_parent">
                            <div className="home_s3_left_txt1">Sobre mi</div>
                            {/* <hr className='about_line' /> */}
                            <p className="home_s3_left_txt2">Multiplataforma Capital es un exclusivo Club Privado que ha creado un modelo basado en tecnología blockchain que recompensa a sus miembros con beneficios a través de servicios especializados en cripto arbitraje.</p>
                        </div>
                        </Fade>
                </div>
                <div className="home_s3_right flex" >
                    <img style={{height:"30rem"}} src="/images/currency.gif" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Home

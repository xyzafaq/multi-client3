import React from 'react'
import { NavLink } from 'react-router-dom'
import './Plans.css'
function Plans() {
  return (
    <>
      <section>
        <div className="plans_s1">
            <div className="plans_title flex">Elige tu membresia</div>
            <div className="plan_container flex">
                <div className="box_container">
                    <div className="bx_plan_txt1">Memebresia plata</div>
                    <div className="bx_plan_txt2"> <span className='dollar_sign' >$</span> 5000</div>
                    <div className="bx_plan_txt3">Cada año</div>
                    <div className="bx_plan_txt4">Valido por 2 años</div>
                    {/* <NavLink to='/silver' className="choose_plan_btn">Elegir</NavLink> */}
                    <a target='_blank' className="choose_plan_btn" href="https://www.mercadopago.com.mx/link-de-pago-plugins-y-plataformas-checkout?matt_tool=98058236&matt_word=MLM_MP_G_AO_Sellers_X_Search_ALL_NS_All-Sellers-Brand&gclid=EAIaIQobChMI9Ofvv6nP_AIVbS2tBh3eIAUkEAAYASABEgKORPD_BwE#benefits-checkout&gbraid=0AAAAADRQ9EIKco2LNpoQeCHBX-5xqo2kX">
                      Elegir
                    </a>
                </div>
                <div className="box_container">
                    <div className="bx_plan_txt1">Membresia oro</div>
                    <div className="bx_plan_txt2"> <span className='dollar_sign' >$</span> 10000</div>
                    <div className="bx_plan_txt3">Cada año</div>
                    <div className="bx_plan_txt4">Valido por 2 años</div>
                    {/* <NavLink to='/gold' className="choose_plan_btn">Elegir</NavLink> */}
                    <a target='_blank' className="choose_plan_btn" href="https://www.mercadopago.com.mx/link-de-pago-plugins-y-plataformas-checkout?matt_tool=98058236&matt_word=MLM_MP_G_AO_Sellers_X_Search_ALL_NS_All-Sellers-Brand&gclid=EAIaIQobChMI9Ofvv6nP_AIVbS2tBh3eIAUkEAAYASABEgKORPD_BwE#benefits-checkout&gbraid=0AAAAADRQ9EIKco2LNpoQeCHBX-5xqo2kX">
                      Elegir
                    </a>
                </div>
            </div>
        </div>
        {/* <div className="check_out_slider">

        </div> */}
      </section>
    </>
  )
}

export default Plans

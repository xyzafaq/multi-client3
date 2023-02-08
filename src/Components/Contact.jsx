import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <>
      <section>
        <div className="contact_s1"  >
          <div className="contact_form">
            <div className="contact_form_title flex">Contacto</div>
            <form >
              <input 
              type="text" 
              required
              className='contact_field'
              placeholder="Nombre"
              />

              <input 
              type="text" 
              className='contact_field'
              placeholder='Apellido'
              />
              <div className="two_fields">
                <input 
                type="text" 
                required
                className='contact_field'
                placeholder='Email'
                />

                <input 
                type="text"
                required
                className='contact_field'
                placeholder='Teléfono'
                />
              </div>

              <textarea 
              type="text" 
              required
              className='contact_field'
              placeholder='Comentarios' cols='50' rows='6'
              style={{paddingTop:"5px",height:"100%"}}
              />
              <div className='flex' style={{position:"relative",bottom:"33px"}} >
                <input type="submit" className='form_submit' />
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

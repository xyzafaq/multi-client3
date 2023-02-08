import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Footer.css';

function Footer() {
    const [formdata,setformData] = useState({
        subject:"",
        mail:"",
    });
    function formChange(event){
        const {name,value} = event.target;
        setformData({
            ...formdata,
            [name] : value,
        })
    }

    return (
    <>
      <div className="footer_main noselect">
        <div className="footer_parent">
            <div className="footer_left">
            <div className="footer_left_parent">
                <div className="footer_left_text1">MULTIPLATFORMA</div>
                <div className="footer_left_text2">CAPITAL</div>
                <div className="footer_left_text3">Let's get connected!</div>
                {/* <div className="home_links2">          
                    <img className="home_links_icon2" src="/icons/facebook.png" alt="" />
                    <img className="home_links_icon2" src="/icons/twitter.png" alt="" />
                    <img className="home_links_icon2" src="/icons/discord.png" alt="" />
                </div> */}
            </div>
            </div>
            <div className="footer_middle">
            {/* <div className="footer_middle_element">
                <div className="footer_element_title">Overview</div>
                <div className="footer_element_content">About</div>
                <div className="footer_element_content">Press</div>
                <div className="footer_element_content">Contact</div>
                <div className="footer_element_content">Terms of use</div>
                <div className="footer_element_content">Privacy Policy</div>
            </div>
            <div className="footer_middle_element">
                <div className="footer_element_title">Get Started</div>
                <div className="footer_element_content">Signup</div>
                <div className="footer_element_content">Login</div>
                <div className="footer_element_content">Connect Debit/Credit</div>
                <div className="footer_element_content">Paypal</div>
                <div className="footer_element_content">Place your Order</div>
                <div className="footer_element_content">Any Query?</div>
            </div>
            <div className="footer_middle_element">
                <div className="footer_element_title">Customer Care</div>
                <div className="footer_element_content">Where is my order?</div>
                <div className="footer_element_content">Contact Us</div>
                <div className="footer_element_content">FAQ</div>
            </div> */}
            {/* <div className="footer_middle_element">
                <div className="footer_element_title">Community</div>
                <div className="footer_element_content">Community Central</div>
                <div className="footer_element_content">Support</div>
                <div className="footer_element_content">Help</div>
                <div className="footer_element_content">Terms of use</div>
                <div className="footer_element_content">Privacy Policy</div>
            </div> */}
            </div>
            <div className="footer_right">
            <form className='footer_form' >
                <div className="form_heading">Stay Connected!</div>
                <input className='footer_form_element' placeholder='SUBJECT' type="text" name='subject' value={formdata.subject} onChange={formChange} />
                <textarea className='footer_form_textarea' type='text' name="mail" cols="50" rows="7" placeholder='Write something...'></textarea>                
                <div className="form_bottom">
                    <input type='email' placeholder='Enter your email' />
                    <div className="form_bottom_img_parent">
                        <img className='form_bottom_img' src="/icons/send.png" alt="" />
                    </div>
                </div>
            </form>
            </div>
        </div>
        <div className="footer_below">
            <hr className='footer_line' />
            <div className="footer_below_text1" onClick={()=>window.scrollTo(5,5) } >2022 &copy; por multiplataformacapital. All right Reserved.</div>
        </div>
      </div> 
    </>
  )
}

export default Footer

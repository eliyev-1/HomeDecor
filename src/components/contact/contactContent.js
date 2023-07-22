import React from 'react'
import img from "../../assets/contact.png"

import { useState} from 'react'

import Success from "../success"

function ContactContent() {
  let [success,setSuccess]=useState(false)
  let openSuccess=()=>{

    setSuccess(true)
    console.log(success)
  }


  return (
    <>
     <div className="contact container">
        <div className="contact__left">
          <form className='contact__form'>
          <div>
            <input type="text" placeholder="NAME, SURNAME" />
          </div>
          <div>
            <input type="text" placeholder="E-MAIL ADRESS"  />
          </div>
          <div>
            <input type="text" placeholder="THEME" />
          </div>
          <div>
            <textarea type="password" placeholder="YOUR MESSAGE"  />
          </div>
          <div className='button' onClick={openSuccess} > <button type='button'>Log in</button>  </div>
          </form>
        </div>
        <div className="contact__right">
          <div className="contact__right__image">
            <img src={img} alt="" />

          </div>

        </div>
      </div>
     
  
      {
      success && (
        
        <Success
        setSuccess={setSuccess}
        header="THANK YOU!"
        tittle="Your message has been received and we will contact you as soon as possible."
      />
        
      )
    }
      
      
   
      
    </>
  )
}

export default ContactContent

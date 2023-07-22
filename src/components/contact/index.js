import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ContactContent from "./contactContent"


import"./contact.css"

function Contact() {

  return (
    <>
       <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home 
          </Link>
          {" "}
          | <span>Contact</span>
          <div className="component__header ">
            <h1>CONTACT</h1>
          </div>
        </div>
      </div>
      <ContactContent/>

      
    
     
      
    </>
  )
}

export default Contact

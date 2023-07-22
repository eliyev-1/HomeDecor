import React from 'react'
import "./success.css"

import { Link } from 'react-router-dom'
import { BsXLg } from "react-icons/bs";

function Success(props) {
return (
  <>
            <div className='success'>
            <div className='success__card'>
                 <h1>
                 {props.header}
                 </h1>
                 <p>
                 {props.tittle}
                 </p>
                 <Link  to="/" className='success__buttonLink'><button className='success__button'>HOME PAGE</button></Link>
                 <span className='success__card__exitIcon' onClick={()=>props.setSuccess(false)}><BsXLg /></span>
            </div>
            
          </div>
      
   
  </>
  )
}

export default Success
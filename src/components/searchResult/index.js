import React from 'react'
import { Link } from "react-router-dom";


function Collections() {
  return (
    <>
    <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home 
          </Link>
          {" "}
          | <span>Search results</span>
          <div className="component__header ">
            <h1>SEARCH RESULTS</h1>
          </div>
          <div className="products__header">
        <div className="container">
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </p>
       
        
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default Collections

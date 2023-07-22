import React from 'react'
import { Link } from "react-router-dom";

function Sale() {
  return (
    <>
       <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home 
          </Link>
          {" "}
          | <span>Sale</span>
          <div className="component__header ">
            <h1>Sale</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sale

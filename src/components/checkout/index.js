import React from "react";
import { Link } from "react-router-dom";
import "./checkout.css";
import { useState} from 'react'

import Success from "../success"

function Checkout() {
  let [success,setSuccess]=useState(false)
  let openSuccess=()=>{
    setSuccess(true)
  }

  return (
    <>
      <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home
          </Link>{" "}
          |{" "}
          
          <Link to="/shoppingCart" className="breadCrumbs__link">
            <span>Shopping Cart</span>
          </Link>{" "}
          | <span>Checkout</span>
          <div className="component__header ">
            <h1>CHECKOUT</h1>
          </div>
        </div>
      </div>
      <div className="checkout container">
        <form>
          <div className="form__left">
            <div className="personalInfo__header">
              <p>PERSONAL INFORMATION</p>
            </div>
            <div className="form__left__columns">
              <div className="form__left__column1">
                <div className="personalInformation">
                  <div>
                    <input type="text" placeholder="JANE" />
                  </div>
                  <div>
                    <input type="text" placeholder="youremailhere@gmail.com" />
                  </div>
                  <div>
                    <input type="text" placeholder="CITY, STREET" />
                  </div>
                </div>

                <div className="paymentMethod">
                  <div className="paymentMethod__header">
                    <p>PAYMENT METHOD</p>
                  </div>
                  <div className="checkboxes">
                    <div>
                      <input type="checkbox" id="card" />
                      <label htmlFor="card"> CARD </label>
                    </div>
                    <div>
                      <input type="checkbox" id="cash" />
                      <label htmlFor="cash"> CASH </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__left__column1">
                <div className="personalInformation">
                  <div>
                    <input type="text" placeholder="CURTIS" />
                  </div>
                  <div>
                    <input type="text" placeholder="+ 994 (__) ___ __ __" />
                  </div>
                  <div>
                    <input type="text" placeholder="POSTAL CODE" />
                  </div>
                </div>

                <div className="deliveryMethod">
                  <div className="deliveryMethod__header">
                    <p>DELIVERY METHOD</p>
                  </div>

                  <div className="checkboxes">
                    <div>
                      <input type="checkbox"  id="courier" />
                      <label htmlFor="courier"> COURIER </label>
                    </div>
                    <div>
                      <input type="checkbox" id="pickup" />
                      <label htmlFor="pickup"> PICKUP </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form__right">
            <div className="cardInfo__header">
              <p>CARD INFORMATION</p>
            </div>
            <div className="cardInformation">
              <div>
                <input type="number" placeholder="CARD NUMBER" />
              </div>
              <div>
                <input type="date"  />
              </div>
              <div>
                <input type="text" placeholder="CW" />
              </div>
            </div>
            <div className="finisOrderButton" onClick={openSuccess}><button type="button">FINISH ORDER</button></div>
          </div>
        </form>

       
      </div>
      {
      success && (
        
        <Success
        setSuccess={setSuccess}
        header="YOUR ORDER IS COMPLETE!"
        tittle="You will be receiving a confirmation email with order details."
      />
        
      )
    }
    </>
  );
}

export default Checkout;

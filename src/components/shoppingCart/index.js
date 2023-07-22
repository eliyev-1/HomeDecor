import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import img from "../../assets/shoppingCart/Rectangle 119.png";
import "./shoppingCart.css";

function ShoppingCart() {
  const [num,setNum]=useState(0)

  let clickIncriement=()=>{
    setNum(num+1)

  }
  let clickDecrement=()=>{
    if(num!==0){
      
    setNum(num-1)

    }

  }
  let inputChange=(event)=>{
    setNum(parseInt(event.target.value))

  }
  return (
    <>
      <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home
          </Link>{" "}
          | <span>Shoppin Cart</span>
          <div className="component__header ">
            <h1>SHOPPING CART</h1>
          </div>
        </div>
      </div>
      <div className="shoppingCart container">
        <div className="shoppingCart__left">
          <div className="shoppingCart__item">
            <div className="shoppingCart__item__left">
              <div className="shoppingCart__item__left__itemRemeve">
                <AiOutlineClose />
              </div>
              <div className="shoppingCart__item__left__itemImage">
                <img src={img} alt="" />
              </div>
              <div className="shoppingCart__item__left__itemName">
                <p>Grayson Premium Grey Wash Nest of Tables</p>
              </div>
              

            </div>
            <div className="shoppingCart__item__right">
            <div className="shoppingCart__item__right__itemColorAndItemCounting">
            <div className="shoppingCart__item__left__itemColor"></div>
            <div className="shoppingCart__item__left__itemCounting">
              <button className="minus" onClick={clickDecrement}>-</button>
              <input type="number" value={num} onChange={inputChange} />
              <button className="plus" onClick={clickIncriement}>+</button>
            </div>
            </div>
            <div className="shoppingCart__item__price">
              <span>140</span><span>$</span>
            </div>
            </div>
           
          </div>
        </div>
        <div className="shoppingCart__right">
          <div className="shoppingCart__right__summary">
            <div>
              <h1>Summary</h1>
            </div>
            <div className="itemCount">
              <div>item count</div> <div>4</div>
            </div>
            <div className="totalPrice">
              <span>total price</span>

              <div>
                <span>460</span>
                <span>$</span>
              </div>
            </div>
           <Link to="./checkout" className="checkout__link">
           <div className="checkoutButton">
              <button>Checkout</button>
            </div>
           </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;

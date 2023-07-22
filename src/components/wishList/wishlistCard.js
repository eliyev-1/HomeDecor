import React from "react";

import img from "../../assets/home/shpNow.png";
import "./wishList.css";


function WishlistCard({price,img,name}) {
  return (
    <div className="wishList__cards">
        <div className="wishList">
     
     <div className="wishList__left">
       <div className="wishList__left__image">
         <img src={img} alt="" />
       </div>
       <div className="wishList__left__textContent">
         <h3>{name}</h3>
         <div className="price">
           <span></span>{price} <span>$</span>
         </div>
       </div>
     </div>
     <div className="wishList__right">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
       >
         <path
           d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
           fill="#B8926A"
         />
       </svg>
     </div>
  
   </div>
    </div>
  );
}

export default WishlistCard;

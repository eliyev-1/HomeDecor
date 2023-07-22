import React from "react";
import { useState,useEffect } from "react";
import img from "../../assets/home/shpNow.png";
import "./wishList.css";
import WishlistCard from "../wishList/wishlistCard";

function Wishlist() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3001/products");
    return await res.json();
  };

  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);


  
  return (
    <>
 
      {products.map((product) => (
        <WishlistCard
          key={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          id={product.id}
       
          isInWishlist={wishlistItems.some((item) => item.id === product.id)}
        
        />
      ))}
    </>
  );
}

export default Wishlist;

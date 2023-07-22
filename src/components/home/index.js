import React, { useEffect, useState } from "react";

import "./home.css";

import AboutContent from "../about/aboutContent";
import ContactContent from "../contact/contactContent";
import ProductsCards from "../productsCards";
import Discount from "../discount/discount";
import HomeHeaderSlider from "../homeHeaderSlider";
import CollectionSlider from "../collectionsSlider";
import Mostpopulyarslider from "../mostPopular";
import HeaderBody from "./headerBody.js";

function Home() {
  const [header, setHeader] = useState();

  const getData = async () => {
    const res = await fetch("http://localhost:3001/header");
    return await res.json();
  };

  useEffect(() => {
    getData().then((res) => setHeader(res));
  }, []);
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    return await res.json();
  };

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);
  return (
    <>
      <div className="shopNow ">
        <div className="container">
          <HeaderBody header={header} />
        </div>
      </div>
      <div className="slider">
        <HomeHeaderSlider />
      </div>

      <div className="section ">
        <div className="container">
          <div className="section__header">
            <h1>About</h1>
          </div>
        </div>
        <AboutContent />
      </div>
      <div className="discount">
        <Discount />
      </div>

      <div className="section ">
        <div className="container">
          <div className="section__header">
            <h1>PRODUCTS</h1> <span>SEE ALL</span>
          </div>
        </div>
        <div className="products__cards container ">
        {products?.map((product) => (
                  <ProductsCards key={product.id}
                   img={product.img} 
                   name={product.name} 
                   price={product.price} 
id={product.id}
                   />
                ))}
        </div>
      </div>
      <div className="section ">
        <div className="container">
          <div className="section__header">
            <h1>MOST POPULAR</h1>
          </div>
        </div>
        <Mostpopulyarslider
         />
      </div>
      <div className="section ">
        <div className="container">
          <div className="section__header">
            <h1>Collections</h1>
          </div>
        </div>
        <CollectionSlider />
      </div>
   
      <div className="section ">
        <div className="container">
          <div className="section__header">
            <h1>Contact</h1>
          </div>
        </div>
        <ContactContent />
      </div>
    </>
  );
}

export default Home;

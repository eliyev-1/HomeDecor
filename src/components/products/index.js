import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCards from "../productsCards"
import { BsSortDown } from "react-icons/bs";
import "./products.css"

function Products() {

  const [products, setProducts] = useState();

  const getData = async () => {
    const res = await fetch("http://localhost:3001/products");
    return await res.json();
  };

  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);
  let [sortByContents, setSortByContents] = useState('sortBy__contents');
  let [categoriesList, setCategoriesList] = useState('categoriesList');
  let [collectionsList, setcollectionsList] = useState('collectionsList');
  let sortByToggle = () => {
    setSortByContents(sortByContents==='sortBy__contents'?'sortBy__contents__active':'sortBy__contents');
  };
  let categoriesListToggle = () => {
    setCategoriesList(categoriesList==='categoriesList'?'categoriesList__active':'categoriesList');
  }; 
   let collectionsListToggle = () => {
    setcollectionsList(collectionsList==='collectionsList'?'collectionsList__active':'collectionsList');
  };
  return (
    <>
      <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home
          </Link>{" "}
          | <span>Products</span>
          <div className="component__header ">
            <h1>PRODUCTS</h1>
          </div>
        </div>
      </div>
      <div className="products__header">
        <div className="container">
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </p>
        <div className="sortBy">
          <div className="sortBy__header" onClick={sortByToggle}><BsSortDown className="sortIcon" /><span>Sort By</span></div>
        
           <div className={sortByContents}>
           <div className="sortBy__contents__item"><input type="checkbox" id="popularFirst"/><label htmlFor="popularFirst" >POPULAR FIRST</label></div>
           <div className="sortBy__contents__item"><input type="checkbox" id="cheapestFirst"/><label htmlFor="cheapestFirst">CHEAPEST FIRST</label></div>
           <div className="sortBy__contents__item"><input type="checkbox" id="expensiveFirst" /><label htmlFor="expensiveFirst">EXPENSIVE FIRST</label></div>
         </div>
         
        </div>
        
        </div>
      </div>
      <div className="products container">
        <div className="products__left">
          <div className="products__left__header" onClick={categoriesListToggle}>
            <h3>CATEGORIES</h3>
          </div>
          <ul className={categoriesList}>
            <li><input type="checkbox" id="allCategories" /> <label for="allCategories">All</label></li>
            <li><input type="checkbox" id="sofas" /> <label for="sofas">SOFAS</label></li>
            <li><input type="checkbox" id="bedsAndHeadBoards" /> <label for="bedsAndHeadBoards">BEDS AND HEADBOARDS</label></li>
            <li><input type="checkbox" id="rugs"/> <label for="rugs">RUGS</label></li>
            <li><input type="checkbox" id="cushions" /> <label for="cushions">CUSHIONS</label></li>
     
          </ul>
          <div className="products__left__header Collections" onClick={collectionsListToggle}>
            <h3>COLLECTIONS</h3>
          </div>
          <ul className={collectionsList}>
            <li><input type="checkbox" id="allCollections" /> <label for="allCollections">All</label></li>
            <li><input type="checkbox" id="bedroom" /> <label for="bedroom">BEDROOM</label></li>
            <li><input type="checkbox" id="livingRoom" /> <label for="livingRoom">LIVING ROOM</label></li>
            <li><input type="checkbox" id="kitchen"/> <label for="kitchen">KITCHEN</label></li>
            <li><input type="checkbox" id="library"/> <label for="library">LIBRARY</label></li>
            <li><input type="checkbox" id="office"/> <label for="office">OFFICE</label></li>
            <li><input type="checkbox" id="laundryRoom"/> <label for="laundryRoom">LAUNDRY ROOM</label></li>
            <li><input type="checkbox" id="guestRoom"/> <label for="guestRoom">GUEST ROOM</label></li>
            <li><input type="checkbox" id="familyRoom" /> <label for="familyRoom">FAMILY ROOM</label></li>
            <li><input type="checkbox" id="bathRoom" /> <label for="bathRoom">BATHROOM</label></li>
          </ul>
        </div>
        <div className="products__right">
        <div className="products__cards container ">
        
        {products?.map((product) => (
                  <ProductCards key={product.id}
                   img={product.img} 
                   name={product.name} 
                   price={product.price} 
id={product.id}
                   />
                ))}


        </div>
         
         

        </div>
        

      </div>
    </>
  );
}

export default Products;

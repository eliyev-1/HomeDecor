import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollectionItem from "./collectionItem";

import "./collections.css";

function Collections() {
  const [collections, setCollections] = useState();

  const getData = async () => {
    const res = await fetch("http://localhost:3001/collections");
    return await res.json();
  };

  useEffect(() => {
    getData().then((res) => setCollections(res));
  }, []);

  return (
    <>
      <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home
          </Link>{" "}
          | <span>Collections</span>
          <div className="component__header ">
            <h1>COLLECTIONS</h1>
          </div>
          <div className="collections">
            <div className="container">
              <div className="collections__header">
                <p>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime.
                </p>
              </div>
              <div className="collections__cards">
                {collections?.map((collection) => (
                  <CollectionItem key={collection.id} collection={collection} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;

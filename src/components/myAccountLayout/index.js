import React from "react";
import { Link, Outlet } from "react-router-dom";

import MyAccountCard from "../../components/myAccountCard"
import "./myAccountLayout.css";

function AuthLayout() {
  return (
    <>
      <div className="breadCrumbs ">
        <div className="container">
          <Link to="/" className="breadCrumbs__link">
            Home
          </Link>{" "}
          | <span>My Account</span>
        </div>
      </div>

      <div className="accountLayout container">
      <div className="accountLayout__left" ><MyAccountCard/></div>
        <div className="accountLayout__right">{<Outlet />}</div>
     
      </div>
    </>
  );
}

export default AuthLayout;

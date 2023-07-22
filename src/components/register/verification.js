import React from "react";
import img from "../../assets/register.png";
import "./register.css";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function index() {
  return (
    <div className="register">
      <div className="register__left">
        <div className="register__breadcumbs">
          <Link to="/" className="register__link">
            <span>
              <BsFillArrowLeftCircleFill />
            </span>{" "}
            <span>Home</span>
          </Link>
        </div>

        <div className="register__left__header">
          <h1>VERIFICATION</h1>
        </div>

        <form className="form__register">
          <div>
            <input type="number" placeholder="ENTER VERIFICATION NUMBER" />
          </div>

          <div>
            <button>
              <Link className="buttonLink" to="/profile">
             <button>VERIFY</button>
              </Link>{" "}
            </button>
          </div>
          <div className="alreaddy">
            <p>Already have an account?</p>
            <Link className="register__link" to="/auth/register">
              {" "}
              Register
            </Link>
          </div>
        </form>
      </div>

      <div className="register__right">
        <div className="register__right__image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default index;

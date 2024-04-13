import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnTerm, setBtnTerm] = useState("Login");

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-container">
            <img src={LOGO_URL} alt="logo" className="logo" />
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/grocery">Grocery</Link>
              </li>
              <li>Cart</li>
              <li>
                <Link to="/login">
                  <button
                    className="login-button"
                    onClick={() => {
                      btnTerm === "Login"
                        ? setBtnTerm("Logout")
                        : setBtnTerm("Login");
                    }}
                  >
                    {btnTerm}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

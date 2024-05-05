import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import ShoppingBag from "../assets/images/header/shopping-bag.webp";
import FillShoppingBag from "../assets/images/header/fill-shopping-bag.webp";
import GreenFillShoppingBag from "../assets/images/header/green-fill-shopping-bag.webp";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnTerm, setBtnTerm] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="p-5 shadow-[0rem_0.3125rem_0.625rem_0rem_rgba(0,0,0,0.27)] fixed top-0 start-0 w-full z-50 bg-white box-border">
      <div className="2xl:w-[90rem] w-[73.125rem] mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="w-12 flex items-center justify-center">
            <img src={LOGO_URL} alt="logo" className="w-full h-auto" />
          </Link>
          <div>
            <ul className="list-none ps-0 mt-0 mb-0 flex items-center gap-5">
              <li>
                <Link
                  className="text-base no-underline text-black hover:text-[#f25925] transition-all"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-base no-underline text-black hover:text-[#f25925] transition-all"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base no-underline text-black hover:text-[#f25925] transition-all"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base no-underline text-black hover:text-[#f25925] transition-all"
                  to="/grocery"
                >
                  Grocery
                </Link>
              </li>
              <li>
                <Link
                  className="text-base no-underline text-black hover:text-[#f25925] transition-all group flex items-center gap-x-1"
                  to="/cart"
                >
                  <span className="relative">
                    <i className="w-6 flex items-center justify-center overflow-hidden mb-1">
                      <img
                        src={ShoppingBag}
                        alt="Shopping cart"
                        className={`w-full h-auto ${
                          cartItems.length !== 0 ? "hidden" : "block"
                        } group-hover:hidden`}
                      />
                      <img
                        src={GreenFillShoppingBag}
                        alt="Fill shopping cart"
                        className={`w-full h-auto ${
                          cartItems.length !== 0 ? "block" : "hidden"
                        } group-hover:hidden`}
                      />
                      <img
                        src={FillShoppingBag}
                        alt="Fill shopping cart"
                        className="w-full h-auto hidden group-hover:block"
                      />
                    </i>
                    {cartItems.length !== 0 && (
                      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs font-bold text-white">
                        {cartItems.length}
                      </span>
                    )}
                  </span>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button
                    className="h-11 bg-orange-600 hover:bg-orange-800 transition-all text-white rounded-md border-none p-[0.625rem] text-sm font-semibold outline-none"
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
              <li>
                <h2 className="font-bold">{loggedInUser}</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

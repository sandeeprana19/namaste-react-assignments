import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnTerm, setBtnTerm] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

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
              <li className="text-base text-black">Cart</li>
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

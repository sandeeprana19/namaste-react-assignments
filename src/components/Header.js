import { LOGO_URL } from "../utils/config";
const Header = () => {
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

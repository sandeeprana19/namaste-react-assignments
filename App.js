import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./logo.svg";
import User from "./user.jpg";

// Coding Assignments 01
const TitleComponent = () => (
  <div className="title">
    <h1 tabIndex="1">Namaste React from h1 🚀</h1>
    <h2 tabIndex="2">Namaste React from h2 🚀</h2>
    <h3 tabIndex="3">Namaste React from h3 🚀</h3>
  </div>
);

const TitleContainerComponent = () => (
  <div className="container">
    {TitleComponent()}
    <TitleComponent />
    <TitleComponent></TitleComponent>
  </div>
);

// Coding Assignments 02
const HeaderComponent = () => (
  <header>
    <a href="#" className="c-image c-image--logo">
      <img src={Logo} alt="Logo" className="c-image__img" />
    </a>
    <input
      type="search"
      className="c-input--search"
      placeholder="Search here"
    />
    <a href="#" className="c-image c-image--user">
      <img src={User} alt="User" className="c-image__img" />
    </a>
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

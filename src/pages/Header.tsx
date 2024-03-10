import React from "react";
import {Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Budgetary Management</h1>
      <img src="/public/images/accounting.png" alt="My Logo" />
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/budget-app">Budget App</Link>
    </nav>
    </header>
  );
};
export default Header;

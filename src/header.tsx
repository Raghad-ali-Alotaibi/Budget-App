import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  // const navigate = useNavigate();
  return (
    <header>
      {/* <nav>
        <link to ="/"> Home</link>
        <link to ="/BudgetApp"> Budget App</link>
      </nav> */}
      <h1>Budgetary Management</h1>
      <img src="/public/images/accounting.png" alt="My Logo" />
    </header>
  );
};
export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/budget-app");
  };

  return (
    <div className="hero">
      <h1>Welcome to Budgetary Management</h1>
      <h2 className="text__title">
        Effortlessly manage your finances with our intuitive budget app, Start
        budgeting smarter today 💰.
      </h2>
      <button className="hero__button" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};
export default Home;

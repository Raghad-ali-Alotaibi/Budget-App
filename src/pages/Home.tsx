import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="hero">
      <h1>Welcome to Budgetary Management</h1>
      <h2 className="text__title">
        Effortlessly manage your finances with our intuitive budget app, Start
        budgeting smarter today 💰.
      </h2>
      <Link to="/budget-app">
      <button className="hero__button" >
        Start
      </button>
      </Link>
    </div>
  );
};

export default Home;
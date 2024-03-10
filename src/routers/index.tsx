import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import BudgetApp from "../pages/BudgetApp";
import Header from "../pages/Header";


const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget-app" element={<BudgetApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Index;

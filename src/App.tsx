import React from "react";
import Header from "./header";
import Income from "./income ";
import Expenses from "./expenses ";
import Target from "./targets";
import Amount from "./amount";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Income />
        <Expenses />
        <Target />
      </main>
      <Amount />
    </div>
  );
}

export default App;

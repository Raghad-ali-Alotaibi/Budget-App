import React from "react";
import Header from "./header";
import Income from "./income ";
import Expenses from "./expenses ";
import Target from "./targets";
import Transfer from "./transfer";
import "./App.css";
import { useState } from "react";

function App() {
  const [SavingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpensesAmount, setTotalExpensesAmount] = useState(0);


  const getSavingAmount = (amount: number)=>{
    setSavingAmount(amount);
  };
  const getTotalIncomeAmount = (amount: number)=>{
    setTotalIncomeAmount(amount);
  };
  const getTotalExpensesAmount = (amount: number)=>{
    setTotalExpensesAmount(amount);
  };

  return (
    <div>
      <Header />
      <main className="container">
        <Income onGetTotalIncomeAmount ={getTotalIncomeAmount}/>
        <Expenses onGetTotalExpensesAmount ={getTotalExpensesAmount} />
        <Target SavingAmount={SavingAmount} />
      </main>
      <Transfer 
      onGetSavingAmount={getSavingAmount}
       totalIncomeAmount ={totalIncomeAmount}
       totalExpensesAmount ={totalExpensesAmount}
       />
    </div>
  );
}

export default App;

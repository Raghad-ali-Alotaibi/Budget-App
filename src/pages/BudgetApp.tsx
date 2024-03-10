import React from "react";
import Header from "./Header";
import Income from "../components/Income ";
import Expenses from "../components/Expenses ";
import Target from "../components/Targets";
import Transfer from "../components/Transfer";
import "./App.css";
import { useState } from "react";

function BudgetApp() {
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpensesAmount, setTotalExpensesAmount] = useState(0);

  const getSavingAmount = (amount: number) => {
    setSavingAmount(amount);
  };
  const getTotalIncomeAmount = (amount: number) => {
    setTotalIncomeAmount(amount);
  };
  const getTotalExpensesAmount = (amount: number) => {
    setTotalExpensesAmount(amount);
  };

  return (
    <div>
      <main className="container">
        <Income onGetTotalIncomeAmount={getTotalIncomeAmount} />
        <Expenses onGetTotalExpensesAmount={getTotalExpensesAmount} />
        <Target SavingAmount={savingAmount} />
      </main>
      <Transfer
        onGetSavingAmount={getSavingAmount}
        totalIncomeAmount={totalIncomeAmount}
        totalExpensesAmount={totalExpensesAmount}
      />
    </div>
  );
}

export default BudgetApp;

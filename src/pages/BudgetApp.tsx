import React, { useCallback } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Income from "../components/Income ";
import Expenses from "../components/Expenses ";
import Target from "../components/Targets";
import Transfer from "../components/Transfer";
import { useState } from "react";

function BudgetApp() {
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpensesAmount, setTotalExpensesAmount] = useState(0);

  const SavingAmount = useCallback((amount: number) => {
    setSavingAmount(amount);
  }, []);

  const getTotalIncomeAmount = useCallback((amount: number) => {
    setTotalIncomeAmount(amount);
  }, []);

  const getTotalExpensesAmount = useCallback((amount: number) => {
    setTotalExpensesAmount(amount);
  }, []);

  return (
    <div>
      <ToastContainer />
      <Header />
      <main className="container">
        <Income onGetTotalIncomeAmount={getTotalIncomeAmount} />
        <Expenses
          onGetTotalExpensesAmount={getTotalExpensesAmount}
          totalIncomeAmount={totalIncomeAmount}
        />
        <Target SavingAmount={savingAmount} />
      </main>
      <Transfer
        onGetSavingAmount={SavingAmount}
        totalIncomeAmount={totalIncomeAmount}
        totalExpensesAmount={totalExpensesAmount}
      />
    </div>
  );
}

export default BudgetApp;

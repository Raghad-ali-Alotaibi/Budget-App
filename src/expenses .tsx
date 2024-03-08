import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ExpensesType = {
  id: string;
  source: string;
  amount: number;
  date: string;
};
type ExpensesProps = {
  onGetTotalExpensesAmount: (amount: number) => void;
};

const Expenses = (props: ExpensesProps) => {
  const [expense, setExpense] = useState({
    source: "",
    amount: 0,
    date: "",
  });
  const [expenses, setExpenses] = useState<ExpensesType[]>([]);

  // total Amount
  const totalAmount = expenses.reduce(
    (total, currentValue) => total + Number(currentValue.amount),
    0
  );
  useEffect(() => {
    props.onGetTotalExpensesAmount(totalAmount);
  }, [expenses, totalAmount, props]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpense((prevExpenses) => {
      return { ...prevExpenses, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newExpenses = {
      id: uuidv4(),
      ...expense,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpenses]);
    // rest state
    setExpense({
      source: "",
      amount: 0,
      date: "",
    });
  };

  // function delete expense
  const deleteExpense = (id: string) => {
    const filteredExpenses = expenses.filter((income) => {
      return income.id !== id;
    });
    setExpenses(filteredExpenses);
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        {/* Expenses */}
        <div>
          <label>Expenses source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={expense.source}
            onChange={handleChange}
            placeholder="Electricity bill"
            required
          ></input>
        </div>

        {/* Amount */}
        <div>
          <label>Amount of expenses</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          ></input>
        </div>

        {/* Date */}
        <div>
          <label>Date of expenses</label>
          <input
            type="date"
            name="date"
            id="date"
            value={expense.date}
            onChange={handleChange}
            required
          ></input>
        </div>
        <button>Add expenses</button>
      </form>
      <ol className="custom-counter">
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              {expense.source}: {expense.amount} EUR on {expense.date}
              <button
                className="delete"
                onClick={() => deleteExpense(expense.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Expenses;

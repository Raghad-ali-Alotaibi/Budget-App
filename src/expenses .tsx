import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ExpensesType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};
type ExpensesProps = {
  onGetTotalExpensesAmount: (amount: number) => void;
};

const Expenses = (props: ExpensesProps) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState<ExpensesType[]>([]);

  // total Amount
  const totalAmount = expenses.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );
  props.onGetTotalExpensesAmount(totalAmount);

  const handleSource = (event: ChangeEvent<HTMLInputElement>) => {
    setSource(event.target.value);
  };

  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const expenses = {
      id: uuidv4(),
      source: source,
      amount: amount,
      date: date,
    };
    setExpenses((prevIncome) => [...prevIncome, expenses]);
    // rest state
    setSource("");
    setAmount(0);
    setDate("");
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
            value={source}
            onChange={handleSource}
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
            value={amount}
            onChange={handleAmount}
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
            onChange={handleDate}
            value={date}
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
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Expenses;

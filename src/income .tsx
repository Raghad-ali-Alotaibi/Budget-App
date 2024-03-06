import { type } from "os";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type IncomeType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type IncomeProps = {
  onGetTotalIncomeAmount: (amount: number) => void;
};

const Income = (props: IncomeProps) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [incomes, setIncome] = useState<IncomeType[]>([]);

  // total Amount
  const totalAmount = incomes.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );
  props.onGetTotalIncomeAmount(totalAmount);

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
    const income = {
      id: uuidv4(),
      source: source,
      amount: amount,
      date: date,
    };
    setIncome((prevIncome) => [...prevIncome, income]);
    // rest state
    setSource("");
    setAmount(0);
    setDate("");
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        {/* Income */}
        <div>
          <label>Income source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={source}
            placeholder="salary"
            onChange={handleSource}
            required
          ></input>
        </div>

        {/* Amount */}
        <div>
          <label>Amount of income</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={handleAmount}
            value={amount}
            required
          ></input>
        </div>

        {/* Date */}
        <div>
          <label>Date of income</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleDate}
            required
          ></input>
        </div>
        <button>Add income</button>
      </form>
      <ol className="custom-counter">
        {incomes.map((income) => {
          return (
            <li key={income.id}>
              {income.source}: {income.amount} EUR on {income.date}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Income;

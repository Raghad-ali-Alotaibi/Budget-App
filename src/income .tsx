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
  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: "",
  });
  const [incomes, setIncomes] = useState<IncomeType[]>([]);

  // total Amount
  const totalAmount = incomes.reduce(
    (total, currentValue) => total + currentValue.amount,
    0
  );
  props.onGetTotalIncomeAmount(totalAmount);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIncome((prevIncome) => {
      return { ...prevIncome, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newIncome = {
      id: uuidv4(),
      ...income,
    };
    setIncomes((prevIncome) => [...prevIncome, newIncome]);
     // rest state
     setIncome({
      source: "",
      amount: 0,
      date: "",
    });
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
            value={income.source}
            placeholder="salary"
            onChange={handleChange}
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
            value={income.amount}
            onChange={handleChange}
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
            value={income.date}
            onChange={handleChange}
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

// import { type } from "os";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type IncomeType = {
  id: string;
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
  console.log(incomes)

  // total Amount
  const totalAmount = incomes.reduce(
    (total, currentValue) => total + Number(currentValue.amount),
    0
  );
  useEffect(() => {
    props.onGetTotalIncomeAmount(totalAmount);
  }, [incomes, totalAmount, props]);

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

  // function delete Income
  const deleteIncome = (id: string) => {
    const filteredIncome = incomes.filter((income) => {
      return income.id !== id;
    });
    setIncomes(filteredIncome);
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
              <button
                className="delete"
                onClick={() => deleteIncome(income.id)}
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
export default Income;

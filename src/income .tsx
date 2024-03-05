import React, { ChangeEvent, FormEvent, useState } from "react";

const Income = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleSource = (event:ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setSource(value);
  };

  const handleAmount = (event:ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setAmount(Number(value));
  };

  const handleDate = (event:ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setDate(value);
  };


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newIncome ={
      source:source,
      amount:amount,
      date:date,
    }
    console.log(newIncome);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Income */}
        <div>
          <label>Income source</label>
          <input
            type="text"
            name="source"
            id="source"
            placeholder="salary"
            onChange={handleSource}
            required
          ></input>
        </div>

        {/* Amount */}
        <div>
          <label>Amount of income</label>
          <input type="number" name="amount" id="amount" onChange={handleAmount} required></input>
        </div>

        {/* Date */}
        <div>
          <label>Date of income</label>
          <input type="date" name="date" id="date"onChange={handleDate} required></input>
        </div>
        <button>Add income</button>
      </form>
    </div>
  );
};
export default Income;

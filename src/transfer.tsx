import React, { ChangeEvent, FormEvent, useState } from "react";

type TransferSavingAmount = { onGetSavingAmount: (amount: number) => void;
  totalIncomeAmount:number;
  totalExpensesAmount:number;
};

const Transfer = (props: TransferSavingAmount) => {
  const [amount, setAmount] = useState(0);

  const handleTransfer = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onGetSavingAmount(amount);
  };

  return (
    <div className="amount">
      <form onSubmit={handleSubmit}>
        <p>Current balance: {props.totalIncomeAmount - props.totalExpensesAmount}</p>
        <label>Transfer to saving account</label>
        <input
          type="number"
          name="transfer"
          id="transfer"
          value={amount}
          onChange={handleTransfer}
          required
        ></input>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default Transfer;

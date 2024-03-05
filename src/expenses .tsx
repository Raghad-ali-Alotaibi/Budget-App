import React from "react";

const Expenses = () => {
  return (
    <div>
      <form>
        {/* Expenses */}
        <div>
          <label>Expenses source</label>
          <input
            type="text"
            name="expenses"
            placeholder="Electricity bill"
            required
          ></input>
        </div>

        {/* Amount */}
        <div>
          <label>Amount of expenses</label>
          <input type="number" name="amount" required></input>
        </div>

        {/* Date */}
        <div>
          <label>Date of expenses</label>
          <input type="date" name="date" required></input>
        </div>
        <button>Add expenses</button>
      </form>
    </div>
  );
};

export default Expenses;

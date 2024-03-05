import React from "react";

const Amount = () => {
  return (
    <div className="amount">
      <form>
      <p>Current balance: 0</p>
        {/* target */}
        <label>Transfer to saving account</label>
        <input type="number" name="transfer" required></input>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default Amount;

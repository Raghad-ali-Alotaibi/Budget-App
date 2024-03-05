import React from "react";

const Target = () => {
  return (
    <div>
      <form>
        {/* target */}
        <label>Set target</label>
        <input type="number" name="target" required></input>
        <button>Reset</button>
      </form>
      <p>Current saving: 0</p>
      <p>Target: 0</p>
      <p>
        <progress max={5000} value={2000} />
      </p>
    </div>
  );
};

export default Target;

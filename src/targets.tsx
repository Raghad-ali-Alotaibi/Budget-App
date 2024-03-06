import React, { ChangeEvent, FormEvent, useState } from "react";

const Target = (props: { SavingAmount: number }) => {
  const [target, setTarget] = useState(0);

  const handleTarget = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTarget((prevTarget) => {
      return prevTarget;
    });
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        {/* target */}
        <label>Set target</label>
        <input
          type="number"
          name="target"
          id="target"
          value={target}
          onChange={handleTarget}
          required
        ></input>
        <button>Reset</button>
      </form>
      <p>Current saving: {props.SavingAmount} </p>
      <p>Target: {target}</p>
      <p> progress: % </p>
      <progress max={5000} value={2000} />
    </div>
  );
};

export default Target;

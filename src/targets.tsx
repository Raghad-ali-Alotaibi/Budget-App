import React, { ChangeEvent, FormEvent, useState } from "react";

const Target = (props: { SavingAmount: number }) => {
  const [target, setTarget] = useState(0);
  const [targetBeforeReset, setTargetBeforeReset] = useState(0);

  const handleTarget = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTarget(targetBeforeReset);
    setTargetBeforeReset(0);
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
      <p>
        {" "}
        progress: {target
          ? Math.round((props.SavingAmount / target) * 100)
          : 0}{" "}
        %{" "}
      </p>
      <progress
        max={100}
        value={Math.round((props.SavingAmount / target) * 100)}
      />
    </div>
  );
};

export default Target;

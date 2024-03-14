import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toastError } from "../components/Error";
import { v4 as uuidv4 } from "uuid";

type IncomeSource = {
  id: string;
  source: string;
  amount: number;
  date: string;
};

type IncomeProps = {
  onGetTotalIncomeAmount: (amount: number) => void;
};

const Income = (props: IncomeProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IncomeSource>();

  const [incomes, setIncomes] = useState<IncomeSource[]>([]);

  // total Amount
  const totalAmount = incomes.reduce(
    (total, currentValue) => total + Number(currentValue.amount),
    0
  );
  useEffect(() => {
    props.onGetTotalIncomeAmount(totalAmount);
  }, [incomes, totalAmount, props]);

  const incomeSubmit: SubmitHandler<IncomeSource> = (data) => {
    if (data.source.length < 4) {
      toastError("the minimum letter is 4 !!");
      return;
    }
    if (data.amount < 0) {
      toastError("The Negative numbers not allowed!!");
      return;
    }
    const newIncome = {
      id: uuidv4(),
      ...data,
    };
    setIncomes((prevIncome) => [...prevIncome, newIncome]);
    reset();
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
      <form onSubmit={handleSubmit(incomeSubmit)}>
        {/* Income */}
        <div>
          <label>Income source</label>
          <input
            type="text"
            id="income_source"
            placeholder="salary"
            {...register("source", { required: "Salary is Required" })}
          ></input>
          {errors.source && <span>{errors.source.message}</span>}
        </div>

        {/* Amount */}
        <div>
          <label>Amount of income</label>
          <input
            type="number"
            id="amount"
            {...register("amount", { required: "Amount is Required" })}
          ></input>
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>

        {/* Date */}
        <div>
          <label>Date of income</label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Date is Required" })}
          ></input>
          {errors.date && <span>{errors.date.message}</span>}
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

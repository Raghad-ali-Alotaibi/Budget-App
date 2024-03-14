import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toastError } from "../components/Error";
import { v4 as uuidv4 } from "uuid";

type ExpenseSource = {
  id: string;
  source: string;
  amount: number;
  date: string;
};
type ExpensesProps = {
  onGetTotalExpensesAmount: (amount: number) => void;
};

const Expenses = (props: ExpensesProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseSource>();

  const [expenses, setExpenses] = useState<ExpenseSource[]>([]);

  // total Amount
  const totalAmount = expenses.reduce(
    (total, currentValue) => total + Number(currentValue.amount),
    0
  );
  useEffect(() => {
    props.onGetTotalExpensesAmount(totalAmount);
  }, [expenses, totalAmount, props]);

  const expenseSubmit: SubmitHandler<ExpenseSource> = (data) => {
    if (data.source.length < 4) {
      toastError("the minimum letter is 4 !!");
      return;
    }
    if (data.amount < 0) {
      toastError("The Negative numbers not allowed!!");
      return;
    }
    const newExpenses = {
      id: uuidv4(),
      ...data,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpenses]);
    reset();
  };

  // function delete expense
  const deleteExpense = (id: string) => {
    const filteredExpenses = expenses.filter((income) => {
      return income.id !== id;
    });
    setExpenses(filteredExpenses);
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit(expenseSubmit)}>
        {/* Expenses */}
        <div>
          <label>Expenses source</label>
          <input
            type="text"
            id="expense_source"
            placeholder="Electricity bill"
            {...register("source", { required: "field is Required" })}
          ></input>
          {errors.source && <span>{errors.source.message}</span>}
        </div>

        {/* Amount */}
        <div>
          <label>Amount of expenses</label>
          <input
            type="number"
            id="amount"
            {...register("amount", { required: "Amount is Required" })}
          ></input>
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>

        {/* Date */}
        <div>
          <label>Date of expenses</label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Date is Required" })}
          ></input>
          {errors.date && <span>{errors.date.message}</span>}
        </div>
        <button>Add expenses</button>
      </form>
      <ol className="custom-counter">
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              {expense.source}: {expense.amount} EUR on {expense.date}
              <button
                className="delete"
                onClick={() => deleteExpense(expense.id)}
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

export default Expenses;

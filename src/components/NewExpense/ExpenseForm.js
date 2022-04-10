import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
const [enteredTitle, setTitle] = useState('');
const [enteredAmount, setAmount] = useState('');
const [enteredDate, setDate] = useState('');

const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value)
}

const amountChangeHandler = (event) => {
    setAmount(event.target.value)
}

const dateChangeHandler = (event) => {
    setDate(event.target.value)
}

  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

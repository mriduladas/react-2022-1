import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');
// const [userInput, setUserInput]= useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// });

const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle:event.target.value};
    // })
    setEnteredTitle(event.target.value);
    console.log('title:',event.target.value)
}

const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState,enteredAmount:event.target.value};
    // })
    setEnteredAmount(event.target.value);
    console.log('amount:',event.target.value)
}

const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState,enteredAmount:event.target.value};
    // });
    setEnteredDate(event.target.value);
    console.log('date:',event.target.value)
}

const submitHandler = (event) =>{
    event.preventDefault();
    const data= {
        title:enteredTitle,
        amount: enteredAmount,
        date: enteredDate
    };
    console.log(data)

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value = {enteredTitle} onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value = {enteredAmount}  onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value = {enteredDate}  min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
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

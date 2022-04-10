import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

const addExpenseDataHandler = (expenseData) => {
  const savedExpenseData = {
    ...expenseData,
    id: Math.random().toString()
  };
  //console.log(savedExpenseData);
  props.onAddExpense(savedExpenseData);
}

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {addExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;

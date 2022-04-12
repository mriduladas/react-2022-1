//import ExpenseItem from "./components/ExpenseItem";
import {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpenseMinimized from './components/Expenses/NewExpenseMinimized';
import NewExpense from "./components/NewExpense/NewExpense";

  //Enpenses parameters
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper1',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; 

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showNewExpense, setShowNewExpense] = useState(false);
  //let newExpenseView = <NewExpenseMinimized onShowNewExpense = {onShowNewExpenseHandler}/>

  const onAddExpenseHandler= (data)=>{
    // console.log(data);
    // console.log("hiii");
    setExpenses(
      (prevExpenses)=> { 
        console.log([data, ...prevExpenses]);
        setShowNewExpense(false);
        return [data, ...prevExpenses]}
        );
  }

  const onShowNewExpenseHandler= (showNewExpenseFlag) => {
    setShowNewExpense(showNewExpenseFlag);
  }

 let newExpenseView;
  if(showNewExpense){
    newExpenseView = <NewExpense onAddExpense= {onAddExpenseHandler}/>
  }else{
    newExpenseView = <NewExpenseMinimized onShowNewExpense = {onShowNewExpenseHandler}/>
  }




  return (
    <div>
        {newExpenseView}
      {/* <NewExpense onAddExpense= {onAddExpenseHandler}/>
      <NewExpenseMinimized onShowNewExpense = {onShowNewExpenseHandler}/> */}
        <Expenses items={expenses } />
    </div>
  );
}

export default App;

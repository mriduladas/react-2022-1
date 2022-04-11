import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setYear] = useState('2020');

  const onSelectFilterHandler = (data) => {
    console.log("Year", data);
    setYear(data);
    //console.log(props);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onSelectFilter={onSelectFilterHandler} />
        {props.items.map((expense) => (
            
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        
        ))}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;

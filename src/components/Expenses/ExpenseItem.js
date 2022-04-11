import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card  from '../UI/Card';

function ExpenseItem(props) {

    // const expenseDate = new Date(2022, 2,28);
    // const expenseTitle = 'Car Inurance';
    // const expenseAmount = 294;
    // const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem Props', props);

    // const clickHandler= () =>{
    //   setTitle('Updated');
    //   console.log('Updated');
    // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2 >{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click Here</button> */}
    </Card>
  );
}

export default ExpenseItem;

import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2022, 2,28);
    const expenseTitle = 'Car Inurance';
    const expenseAmount = 294;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString().substring(0,10)}</div>
      <div className="expense-item__description">
        <h2 >{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
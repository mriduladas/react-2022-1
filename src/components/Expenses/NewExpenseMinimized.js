import './NewExpenseMinimized.css';
const NewExpenseMinimized =(props)=> {

const clickHandler = () => {
    props.onShowNewExpense(true);
}

return (
    <div className="new-expense-minimized">
    <button className="new-expense-minimized__actions" onClick={clickHandler}>Add NewExpense</button>
    </div>
)
}

export default NewExpenseMinimized; 
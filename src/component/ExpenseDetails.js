
const ExpenseDetails=(props)=>{
    return(
        <div>
        <div className="Expense-Title">{props.title}</div>
        <div className="Expense-Amount">Rs.{props.amount}</div>
        </div>
    )
};
export default ExpenseDetails
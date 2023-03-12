


const ExpenseDetails=(props)=>{
    return (

            <div className="expense-details">
              <h2 className="expense-title">{props.title}</h2>
              <div className="expense-amount">Rs.{props.amount}</div>
            </div>
        
    )
}
export default ExpenseDetails
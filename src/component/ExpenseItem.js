
import "./ExpenseItem.css"
function ExpenseItem(props){

    return (

        <div>
           <div className="ExpenseItem-Dates"><p>{props.date.toISOString()}</p></div>
            <div className="ExpenseItem-Description"><p>{props.title}</p></div>
           <div className="ExpenseItem-Amount"><p>Rs.{props.amount}</p></div> 
           <div className="ExpenseItem-Location"><p>{props.locationOfExpenditure}</p></div> 
        </div>
    )
}
export default ExpenseItem;
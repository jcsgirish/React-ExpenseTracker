import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";




const ExpenseItem=(props)=>{
return(

<div className="expense-item">
<ExpenseDate date ={props.date} />

<div><ExpenseDetails title = {props.title} amount={props.amount} /></div>
</div>




);
}


export default ExpenseItem;
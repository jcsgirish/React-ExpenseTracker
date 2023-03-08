
import "./ExpenseItem.css"
function ExpenseItem(props){
    const Month=props.date.toLocaleString('en-US',{ month:'long'});
    const Year=props.date.getFullYear();
    const Day=props.date.toLocaleString('en-US',{ day:'2-digit'});
    return (
        <div>
        <div className="ExpenseItem-Dates">
          <div>
         <div>{Month}</div>
          <div>{Year}</div>
          <div>{Day}</div>
          </div>
          <div className="ExpenseItem-Description">{props.title}</div>
          <div className="ExpenseItem-Amount">Rs.{props.amount}</div> 
        </div>
      </div>
)}


export default ExpenseItem;
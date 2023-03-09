
import "./ExpenseDate.css"


const ExpenseDate=(props)=>{
    const Month=props.date.toLocaleString('en-US',{ month:'long'});
    const Year=props.date.getFullYear();
    const Day=props.date.toLocaleString('en-US',{ day:'2-digit'});

return (
   
          <div className="ExpenseDate">
         <div className="ExpenseMonth">{Month}</div>
          <div className="ExpenseYear">{Year}</div>
          <div className="ExpenseDay">{Day}</div>
          </div>
    
);
}

export default ExpenseDate;
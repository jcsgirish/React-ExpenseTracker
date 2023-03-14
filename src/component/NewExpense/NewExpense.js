
import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense=(props)=>{

const SaveExpensehandler=(entererdExpenseData)=>{
    const expenseData ={
        ...entererdExpenseData,
        id: Math.random().toString()
    }
    props.onAddingExpense(expenseData);

}
    return(
    <div className="new-expense">
        <ExpenseForm SaveExpense ={SaveExpensehandler}/>
       
    </div>

    )
};
 export default NewExpense;
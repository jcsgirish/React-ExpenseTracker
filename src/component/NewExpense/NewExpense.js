
import React, {useState} from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
const NewExpense=(props)=>{
    const [Newedit,setEdit] =useState(false)

const SaveExpensehandler=(entererdExpenseData)=>{
    const expenseData ={
        ...entererdExpenseData,
        id: Math.random().toString()
    }
    props.onAddingExpense(expenseData);

}

const Edithandle=()=>{
    setEdit(true)
}
const CancelEdit=()=>{
    setEdit(false)
}
    return(
    <div className="new-expense">

    {! Newedit&&  (<button onClick={Edithandle}>Add New Expense </button>)}

    {Newedit && ( <ExpenseForm SaveExpense ={SaveExpensehandler}

     onCancel={CancelEdit}/>
)}
       
    </div>

    )
};
 export default NewExpense;
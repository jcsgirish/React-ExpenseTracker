

import React from "react"

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

const ExpenseList = (props)=>{
    if(props.items.length===1){
        return <h2 className="expenses-lists">Only single Expense here. Please add more...</h2>
    }

    return (
    <ul className="expense-list">
        {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
     ))}

    </ul>
    )

};

export default ExpenseList  
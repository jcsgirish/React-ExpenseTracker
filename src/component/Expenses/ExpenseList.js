import React from "react"

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

const ExpenseList = (props)=>{
    return (
        <ul >
            {props.items.length ===1 &&  <h2 className="expenses-lists">Only single Expense here. Please add more...</h2>} 
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;
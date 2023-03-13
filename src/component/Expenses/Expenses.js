import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
 
  const expenseItems = [];

  for (let i = 0; i < props.items.length; i++) {
    const expense = props.items[i];

    expenseItems.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
    }

  return <Card className="expenses">{expenseItems}</Card>;
  
}

export default Expenses;
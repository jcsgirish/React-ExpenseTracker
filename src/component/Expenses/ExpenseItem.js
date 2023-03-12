import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails  from './ExpenseDetails'



const ExpenseItem = (props) => {
  const click =()=>{
    console.log('deleted')
  }

  return (

    <Card className='expense-item'>
    
    <ExpenseDate date ={props.date} />
    
    <ExpenseDetails title ={props.title} amount={props.amount} />

    <button className='Button'onClick= {click}>DeleteExpense</button>
    
    </Card>
    
    )
}

export default ExpenseItem;
import React , { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails  from './ExpenseDetails'



const ExpenseItem = (props) => {
const[title, setTitle] = useState(props.title);


  const clickhandle =()=>{
    setTitle('100$');
 

    console.log(title)

  };

  return (

    <Card className='expense-item'>
    
    <ExpenseDate date ={props.date} />
    
    <ExpenseDetails title ={title} amount={props.amount} />

    <button className='Button'onClick= {clickhandle}>DeleteExpense</button>
    
    </Card>
    
    )
}

export default ExpenseItem;
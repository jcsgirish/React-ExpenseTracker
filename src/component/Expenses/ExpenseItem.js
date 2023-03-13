import React , { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails  from './ExpenseDetails'



const ExpenseItem = (props) => {
const[title, setTitle] = useState(props.title);


  const clickhandle =()=>{
    setTitle();
 

    console.log(title)

  };

  return (

    <Card className='expense-item'>
    
    <ExpenseDate date ={props.date} />
    
    <ExpenseDetails title ={title} amount={props.amount} />

    <button className='Button'onClick= {clickhandle}>Delete</button>
   
    
    </Card>
    
    )
}

export default ExpenseItem;
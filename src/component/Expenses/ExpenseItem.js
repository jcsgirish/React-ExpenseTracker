import React  from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails  from './ExpenseDetails'



const ExpenseItem = (props) => {
return (

    <Card className='expense-item'>
    
    <ExpenseDate date ={props.date} />
    
    <ExpenseDetails title ={props.title} amount={props.amount} />
    
    </Card>
    
    )
}

export default ExpenseItem;
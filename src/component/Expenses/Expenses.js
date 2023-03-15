import React , {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter"


const Expenses = (props) => {

  const [FilterYear,SetFilterYear]=useState('2023')

  const FilterHandle=(selectedYear)=>{
    SetFilterYear(selectedYear)
  };
 
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

  return <Card className="expenses"> 
  <ExpenseFilter Selected = {FilterYear} onChangingFilter = {FilterHandle}></ExpenseFilter>
  {expenseItems}

  </Card>;

  
}

export default Expenses;
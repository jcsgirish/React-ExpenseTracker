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

  const filteredYear=props.items.filter(expense=>{

    return expense.date.getFullYear().toString()===FilterYear;
  });

  //const expenseItems = [];

  //for (let i = 0; i < props.items.length; i++) {
    //const expense = props.items[i];

    //expenseItems.push(
      //<ExpenseItem
        //key={expense.id}
        //title={expense.title}
        //amount={expense.amount}
        //date={expense.date}
     // />
   // );
 // }
 const expenseitems=filteredYear.map((expense)=>(
  <ExpenseItem 
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
))

  return (
    <div>
     <Card className="expenses"> 
  <ExpenseFilter Selected = {FilterYear} onChangingFilter = {FilterHandle}/>
  {expenseitems};
  </Card>;
  </div>

  )};


export default Expenses;
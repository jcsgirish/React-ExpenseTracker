import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2023');

  const filterHandle = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangingFilter={filterHandle}
        />
        <ExpenseList items ={filteredYear}/>
      </Card>
    </div>
  );
};
export default Expenses;
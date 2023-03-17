import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

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
        
        {filteredYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        
        ))}
        {filteredYear.length === 1 && <p style={{color:'white'}}>Only single Expense here. Please add more...</p>}
      </Card>
    </div>
  );
};

export default Expenses;
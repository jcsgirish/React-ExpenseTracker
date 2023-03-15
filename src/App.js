import React, { useState } from 'react';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from  "./component/Expenses/Expenses";



const DummyExpenses = [
  {
    id: 'e1',
    title: 'Cricket',
    amount: 200,
    date: new Date(2020, 5, 4),
  },
  { id: 'e2',
   title: 'Rugby',
    amount: 800,
     date: new Date(2021, 2, 9) },
  {
    id: 'e3',
    title: 'football',
    amount: 100,
    date: new Date(2022, 10, 8),
  },
  {
    id: 'e4',
    title: 'Soccer',
    amount: 500,
    date: new Date(2023, 7, 1),
  }

];

const App = () => {
  const [expenses,setExpenses]=useState(DummyExpenses);

  const addexpensehandler=(expense)=>{
    setExpenses((prevExpenses)=>{

      return [expense,...prevExpenses]
      });
    };
return(
    <div>
 
     <NewExpense onAddingExpense={addexpensehandler}></NewExpense>
      <Expenses items={expenses} />
   </div>
)
}
export default App;
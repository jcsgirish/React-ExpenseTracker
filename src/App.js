import React from 'react';

import Expenses from  "./component/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Cricket',
      amount: 200,
      date: new Date(2023, 5, 4),
    },
    { id: 'e2',
     title: 'Rugby',
      amount: 800,
       date: new Date(2023, 2, 9) },
    {
      id: 'e3',
      title: 'football',
      amount: 100,
      date: new Date(2023, 10, 8),
    },
    {
      id: 'e4',
      title: 'Soccer',
      amount: 500,
      date: new Date(2023, 7, 1),
    },
  ];
  return (
    <div>
     <h2 style={{textAlign:'center'}}>Expence Tracker</h2>
    
      
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Cricket',
      amount: 500,
      date: new Date(2023, 5, 5),
    },
    {
      id: 'e2',
      title:'Rugby',
      amount: 100,
      date: new Date(2023, 11, 8),
   
    },
    {
      id: 'e3',
      title: 'soccer',
      amount: 1000,
      date: new Date(2023, 2, 6),
  
    }
  ];

  const expenseItems = [];

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];

    expenseItems.push(
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        amount={expense.amount}
        title={expense.title}></ExpenseItem>
      
       
    );
  }

  return (
    <div>
      <h2>Expenses:</h2>
      {expenseItems}
    </div>
  );
}

export default App;
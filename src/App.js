import ExpenseItem from "./component/ExpenseItem";

const App=()=> {
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
      date: new Date(2023, 4, 8),
   
    },
    {
      id: 'e3',
      title: 'soccer',
      amount: 1000,
      date: new Date(2023, 2, 6),
  
    },
    {
      id: 'e4',
      title: 'Boxing',
      amount: 800,
      date: new Date(2023, 9, 1),
  
    }

  ];

  const expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}></ExpenseItem>


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
import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Football',
      amount: 500,
      date: new Date(2023, 5, 5),
      locationOfExpenditure: 'Sports shop'
    },
    {
      id: 'e2',
      title:'Cricket bat',
      amount: 100,
      date: new Date(2023, 11, 8),
      locationOfExpenditure: 'Sports shop'
    },
    {
      id: 'e3',
      title: 'Bat',
      amount: 1000,
      date: new Date(2023, 2, 6),
      locationOfExpenditure: 'Sports shop'
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
        date={expense.date}
        locationOfExpenditure={expense.locationOfExpenditure}></ExpenseItem>
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
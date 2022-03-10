import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Learn from './components/Learn/Learn';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [name,setname] = useState('');
  const [expenses,setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
};
  const onNameHandler = (title) => {
    console.log("working and learning");
    console.log(title);
    setname(title);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
      <Learn title ='faraz' onSaveName={onNameHandler} />
      {name}
    </div>
  );
}

export default App;

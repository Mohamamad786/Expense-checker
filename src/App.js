import React, {useState, useEffect} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Learn from './components/Learn/Learn';
import Routing from './components/Routing/Routing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/UI/Loading';
import axios from 'axios';


// const get_data = () => {
//    axios.get('http://localhost:4000/expenses').then((response) => {
//      console.log(response);
//    }).catch((error) => {
//     console.log(error);
//   });
// };

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
  const [expenses,setExpenses] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/expenses').then((response) => {
   const data = response.data;
   Object.keys(data).map((key,index) => {
    data[key].date = new Date(data[key].date);
       response.date = new Date(response.date);     
   })    
   setExpenses(data);
    }).catch((error) => {
     console.log(error);
    })
  }, []);
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

    // don't render Child until `items` is ready!

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler} />
      {!expenses && <Loading />}

      {expenses && <Expenses items={expenses} />}

      {/* <Learn title ='faraz' onSaveName={onNameHandler} />
      {name}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routing />}>
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;

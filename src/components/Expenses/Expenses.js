import Card from '../UI/Card';
import NewExpense from '../NewExpense/NewExpense';
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  const texting = <div style={{ textAlign: 'center' }}>
    <h2>Faraz is the Best</h2>
  </div>;



  return (
    <div>
      <React.Fragment>
        {ReactDom.createPortal(texting, document.getElementById('portal-test'))}
      </React.Fragment>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* creates a new array out of an array, always add key when mapping out array */}
        {/* {filteredExpenses.length === 0 ? (<p class="white">No expense found.</p>) : (filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )))} */}
        <ExpensesChart expenses={filteredExpenses} />

        <ExpenseList items={filteredExpenses} />

      </Card>
    </div>
  );
}

export default Expenses;
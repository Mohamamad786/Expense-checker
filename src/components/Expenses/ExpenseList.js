import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    let expensecontent = <p>No Expense Found</p>;

    if (props.items.length > 0) {
    return (
        <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
          </ul>
    );
}
else {
    return (
        <h2 className="expenses-list__fallback">No Expense Found.</h2>
    )
}
}

export default ExpenseList;
import React from 'react';
import styles from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

const onSaveExpenseDataHandler = (enteredExpenseData) => {
   const expenseData = {
...enteredExpenseData,
id: Math.random.toString()
   };
console.log(expenseData);
props.onAddExpense(expenseData);
};
    return (
        <div className={styles['new-expense']}>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
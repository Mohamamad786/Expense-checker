import React, { useState, useRef } from 'react';
import './ExpenseForm.css';
import axios from 'axios';

const ExpenseForm = (props) => {
    const titleInput = useRef();
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // example of useref to read values  
        // console.log(titleInput.current.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //   // using just one state for all
    //   const [userInput, setUserInput] = useState({
    //      enteredTitle: '',
    //      enteredAmount: '',
    //      enteredDate: ''
    //   });
    //   const titleChangeHandler = (event) => {
    //     // setUserInput({
    //     //     // using spread operator to get the old value
    //     //     ...userInput,
    //     //     enteredTitle: event.target.value,
    //     // });
    //     // guarentee latest state snapshot, if state depends on prvious update
    //     setUserInput((prevState) => {
    //      return {...prevState, enteredTitle: event.target.value};   
    //     });
    //     };
    //     const amountChangeHandler = (event) => {
    //         setUserInput({
    //             // using spread operator to get the old value
    //             ...userInput,
    //             enteredAmount: event.target.value,
    //         });
    //     };
    //     const dateChangeHandler = (event) => {
    //         setUserInput({
    //             // using spread operator to get the old value
    //             ...userInput,
    //             enteredDate: event.target.value,
    //         });
    //     };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        axios.post('http://localhost:4000/postExpense', {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        })
            .then(response => {
                props.onSaveExpenseData(expenseData);
                setEnteredTitle('')
                setEnteredAmount('')
                setEnteredDate('')
            })
            .catch(error => {
                console.log(error.response)
            });

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} ref={titleInput} required />
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required />
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-02-02" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} required />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

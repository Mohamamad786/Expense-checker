import React, {useState} from 'react';
import './Learn.scss';

const Learn = (props) => {
const [enteredName, setEnteredName] = useState('');
const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
};
const submitHandler = (event) => {
    event.preventDefault();
    const title = enteredName;
    props.onSaveName(title);
    setEnteredName('');
}
let name = props.title;
    return (<div>
    <form onSubmit={submitHandler}>
    <input type="text"  onChange={nameChangeHandler} value={enteredName} placeholder='Enter Name' />
    <button type="submit">SAVE</button>
    </form>
        <h2>
     Learning Now {name}
    </h2>
        </div>);
};

export default Learn;
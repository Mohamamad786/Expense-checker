import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import Border from '../UI/Bordering';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

//using react hooks usestate, cannot be called oustide component function
const [title, setTitle] = useState(props.title);

  const clickHandler = (props) => {
        setTitle('Updated');
  }
  return (
  <Border>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button>  */}
    </Card>
    </Border>
  );
}

export default ExpenseItem;


import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import React,{ useState } from 'react';

function ExpenseItem(props){
   
    const [title,setTitle] = useState(props.title); 
    const clickHandler = () =>{
           setTitle('New Title..')
    }
    return(
        <Card className='items'>
            <ExpenseDate className='date' date={props.date}/>
            <div className='item-desc'>
                <h2>{title}</h2>
                <div className='item-price'>{props.amount}</div>
            </div>
            <input className='item-change' placeholder='Input Titile'  type="text"></input>
            <button className='item-price' onClick={clickHandler}>Change-Title</button>
        </Card>
        
    );
}

export default ExpenseItem;
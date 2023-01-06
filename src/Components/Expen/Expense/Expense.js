import './Expense.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import React from 'react';
function Expense(props){
    return(
        <Card className='expense'>
            {
           props.item.map(obj => (<ExpenseItem 
                    date = {obj.date}
                    title ={obj.title}
                    amount = {obj.amount}
                    />))
          }
       </Card>
    );
}

export default Expense;
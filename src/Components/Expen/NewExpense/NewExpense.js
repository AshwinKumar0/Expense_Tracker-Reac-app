import './NewExpense.css';
import React from 'react';
import ExpenseForm from './ExpenseForm';



const NewExpense = (props) => {
   const saveExpenseDataHandler = (expenseData) => {
   props.newObject(expenseData);
   };
 return(
    <div className='new-expense'>
         <ExpenseForm onSaveExpense={saveExpenseDataHandler}/> 
    </div>
 );
}

export default NewExpense;
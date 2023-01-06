import './ExpenseForm.css'
import React,{useState} from 'react'


const ExpenseForm = (props) => {

    const [newTitle, setTitle] = useState('');
    const [newAmount,setAmount] = useState('');
    const [newDate,setDate] = useState('');


    const changeTitle = (event) => {setTitle(event.target.value)};
    const changeAmount = (event) => {setAmount(event.target.value)};
    const changeDate = (event) => {setDate(event.target.value)};

    const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
        title: newTitle,
        amount: newAmount,
        date: new Date(newDate)
      }
      props.onSaveExpense(expenseData);
      setTitle('');
      setAmount('');
      setDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label> Title </label>
                    <input type="text" value={newTitle} onChange={changeTitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label> Amount </label>
                    <input type="number" value={newAmount} onChange={changeAmount} min="0.01" step="0.01"></input>
                </div>
                <div className='new-expense__control'>
                    <label> Date </label>
                    <input type="date" value={newDate} onChange={changeDate}></input>
                </div>
            </div>
            <div className='new-expense__action'>
             <button type='submit'>
                 Add Expense
             </button>
            </div>
        </form>
    );

}

export default ExpenseForm;
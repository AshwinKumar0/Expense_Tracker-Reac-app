import React,{useState} from 'react';
import './App.css'
import Expense from './Components/Expen/Expense/Expense';
import NewExpense from './Components/Expen/NewExpense/NewExpense';

function App(){

 const[expenses,setExpenses] = useState(Dummy_expense);
  
  const addObject = (expenseData) => {
   const data = {
    id: Math.random(1,1000).toString(), 
    ...expenseData
   }
   const updatedData = [data,...expenses];
   setExpenses(updatedData);
  }
  
  return (
     <div>
      <h2>Expense Tracker</h2>
      <NewExpense newObject = {addObject} />
      <Expense item={expenses}/>
       </div>
  );
}
export default App;

let Dummy_expense = [
  {
    id : 'e1',
    title : 'Books',
    amount : '150',
    date : new Date(2022,10,14)
  },
  {
    id : 'e2',
    title : 'copies',
    amount : '110',
    date : new Date(2022,12,14)
  },
  {
    id : 'e2',
    title : 'laptop',
    amount : '55550',
    date : new Date(2022,12,24)
  },
  {
    id : 'e4',
    title : 'phone',
    amount : '11150',
    date : new Date(2022,12,30)
  },
];

import React from 'react';
import './App.css'
import Expense from './Components/Expen/Expense/Expense';

function App(){
  let expense = [
    {
      id : 'e1',
      title : 'Books',
      amount : '₹150',
      date : new Date(2022,10,14)
    },
    {
      id : 'e2',
      title : 'copies',
      amount : '₹110',
      date : new Date(2022,12,14)
    },
    {
      id : 'e2',
      title : 'laptop',
      amount : '₹55550',
      date : new Date(2022,12,24)
    },
    {
      id : 'e4',
      title : 'phone',
      amount : '₹11150',
      date : new Date(2022,12,30)
    },
  ];
  return (
     <div>
      <h2>Expense Tracker</h2>
      <Expense item={expense}/>
       </div>
  );
}
export default App;
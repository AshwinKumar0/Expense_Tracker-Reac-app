import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

function ExpenseItem(props){
    return(
        <Card className='items'>
            <ExpenseDate className='date' date={props.date}/>
            <div className='item-desc'>
                <h2>{props.title}</h2>
                <div className='item-price'>₹ {props.amount}</div>
            </div>
        </Card>
        
    );
}

export default ExpenseItem;
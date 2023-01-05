import './ExpenseDate.css'
import React from 'react';
import classNames from 'classnames';

function ExpenseDate(props){
    const {className} = props;
    const classes = classNames('date',className)
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});;
    return(
        <div className={classes}>
                <div className='day'>{ day }</div>
                <div className='month'>{ month }</div>
                <div className='year'>{ year }</div>
            </div>
    );
}

export default ExpenseDate;
import React from 'react';
import './Card.css'
import classNames from 'classnames';


function Card(props){
    const {className} = props;
    const classes = classNames('Card',className)
    return(
     <div className={classes}>{props.children}</div>
    );
}

export default Card;
import React from 'react';
import classnames from 'classnames';
import style from './Item.module.css';

function Item({ value, isDone }) {
  return (
    <span className={
      classnames({
        [style.item]: true,
        [style.done]: isDone,
      })
    }>{ value }</span>
  )
}

export default Item;
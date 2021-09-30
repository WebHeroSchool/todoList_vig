import React from 'react';
import classnames from 'classnames';
import style from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';

function Item({ value, isDone }) {
  return (
    <ListItem className={
      classnames({
        [style.item]: true,
        [style.done]: isDone,
      })
    }>{ value }</ListItem>
  )
}

export default Item;
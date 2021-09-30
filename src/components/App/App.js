// import logo from './logo.svg';
import styles from './App.module.css';

import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

import Paper from '@material-ui/core/Paper';

function App() {

  const items = [
    {
      value: 'todo 1',
      isDone: true
    },
    {
      value: 'todo 22',
      isDone: false
    },
    {
      value: 'todo 332',
      isDone: true
    },
  ];

  return (
    <Paper className={styles.wrapper} elevation={3}>
      <h1>List</h1>
      <InputItem/>
      <ItemList items={items} />
      <Footer count={3}/>
    </Paper>
  );
}



export default App;

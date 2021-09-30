import React from 'react';
import Item from '../Item/Item';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ItemList = ({ items }) => (<List>
  {
    items.map(item => <ListItem key={item.value}>
      <Item value={item.value} isDone={item.isDone} />
    </ListItem>
    )
  }
</List>);

export default ItemList;
import React from 'react';
import Item from '../Item/Item';

import List from '@material-ui/core/List';

const ItemList = ({ items }) => (<List>
  {
    items.map(item => <li id={item.value}>
      <Item value={item.value} isDone={item.isDone}/>
    </li>

    )
  }
</List>);

export default ItemList;
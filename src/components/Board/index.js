import React, { useState } from 'react';
import produce from 'immer';

import BoardContext from './context';
import { loadLists } from '../../services/api';

import './styles.css';

import List from '../List';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to, fromList, toList) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  };
  
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <div className="board-container">
          {lists.map((item, index)=> <List key={item.title} index={index} data={item}/>)}
      </div>
    </BoardContext.Provider> 
  );
}

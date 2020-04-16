import React from 'react';

import { MdAdd } from 'react-icons/md';
import './styles.css';

import Card from '../Card';

export default function List({ data, index: listIndex }) {
  return (
      <div className="list-container" style={data.done ? {opacity: 0.6} : {opacity: 1}}>
        <header>
          <h2>{data.title}</h2>
          {data.creatable && (
            <button type="button">
            <MdAdd size={24} color="#FFF"/>
            </button>
          )}
        </header>

        <ul>
          {data.cards.map((card, index)=> <Card key={card.id} index={index} listIndex={listIndex} data={card}/>)}
        </ul>
      </div>
  );
}

import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './global.css';
import Header from './components/Header';
import Board from './components/Board';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
    </DndProvider>
  );
}


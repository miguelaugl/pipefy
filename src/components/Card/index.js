import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import './styles.css';

import Label from '../Label';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && targetListIndex === draggedListIndex) {
        
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = targetSize.height / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      } 

      if (draggedIndex > targetIndex && draggedTop < targetCenter) {
        return;
      }
      
      move(draggedIndex, targetIndex, draggedListIndex, targetListIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref));

  return (
    <div className={isDragging ? "card-container dragging" : "card-container"} ref={ref}>
      <header style={{opacity: isDragging ? 0 : 1}}>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p style={{opacity: isDragging ? 0 : 1}}>{data.content}</p>
      {data.user && <img src={data.user} alt="" style={{opacity: isDragging ? 0 : 1}}/>}
    </div>
  );
}

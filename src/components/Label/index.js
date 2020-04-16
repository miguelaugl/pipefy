import React from 'react';

import './styles.css';

export default function Label(props) {

  return (
    <span className="label" style={{ backgroundColor: props.color }}></span>
  );
}

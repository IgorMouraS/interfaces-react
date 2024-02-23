// src/List.js
import React from 'react';

function List({ items, handleDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text} 
          <button onClick={() => handleDelete(item.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default List;

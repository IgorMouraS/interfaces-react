// src/components/Home.js
import React, { useState } from 'react';
import '../styles/Home.css';
import data_home from '../data/data-home';
import List from '../components/ListaDinamica/List';
import ItemCount from '../components/ListaDinamica/ItemCount';

function ListaDinamica() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setItems([...items, { id: Date.now(), text }]);
    setText('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>{data_home.titulo}</h1>
      <h2>{data_home.sub_titulo}</h2>
      <p>{data_home.apresentacao_projeto}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">{data_home.botao}</button>
      </form>
      <ItemCount count={items.length} />
      <List items={items} handleDelete={handleDelete} />
    </div>
  );
}

export default ListaDinamica;

// src/components/Home.js
import React, { useState } from 'react';
import List from '../components/List';
import ItemCount from '../components/ItemCount';

function Home() {
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
      <h1>Lista Dinâmica</h1>
      <h2>Bem-vindo à Página Inicial</h2>
      <p>Esta é a nova tela do projeto.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Adicionar</button>
      </form>
      <ItemCount count={items.length} />
      <List items={items} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;

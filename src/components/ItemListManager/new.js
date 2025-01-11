// ItemListManager.js
import React, { useState } from 'react';
import './new.css';
const ItemListManager = () => {

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className='item-list-manager'>
      <div className='header'>
        <img alt="header-image" src="hackerrank.png" className=''/>
        <h1>Item List Manager</h1>
      </div>
     
      <input
        type="text"
        placeholder="Add new item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;

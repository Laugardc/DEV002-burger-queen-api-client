import React, { useState } from 'react';

function NewOrderForm({ onSubmit }) {
    const [tableNumber, setTableNumber] = useState('');
    const [items, setItems] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newOrder = {
        tableNumber,
        items: items.split(',').map((item) => item.trim()),
      };
      onSubmit(newOrder);
      setTableNumber('');
      setItems('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Table Number"
          value={tableNumber}
          onChange={(event) => setTableNumber(event.target.value)}
        />
        <input
          type="text"
          placeholder="Items (comma separated)"
          value={items}
          onChange={(event) => setItems(event.target.value)}
        />
        <button type="submit">Add Order</button>
      </form>
    );
  }

  export default NewOrderForm;
import React, { useState } from 'react';
import NewOrderForm from '../components/NewOrderForm';
function KitchenOrders() {
  const [orders, setOrders] = useState([]);

  const handleNewOrder = (order) => {
    setOrders([...orders, order]);
  };

  const handleOrderCompleted = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <div>
      <h2>Kitchen Orders</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <div>Table {order.tableNumber}</div>
            <div>Items: {order.items.join(', ')}</div>
            <button onClick={() => handleOrderCompleted(index)}>Completed</button>
          </li>
        ))}
      </ul>
      <NewOrderForm onSubmit={handleNewOrder} />
    </div>
  );
}


export default KitchenOrders;

import React, {useState} from 'react';
import '../styles/MenuToOrder.scss';

const Menu = () => {
  const [orders, setOrders] = useState([]);

  const menuItems = [
    { _id: 1, name: "Margarita", price: 10.99 },
    { _id: 2, name: "Meat Lovers", price: 12.99 },
    { _id: 3, name: "Fontana", price: 8.99 },
    { _id: 4, name: "Death in Venice", price: 6.99 },
  ];

  const handleOrder = (item) => {
    setOrders([...orders, item]);
  };

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <div key={item._id}>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <button onClick={() => handleOrder(item)}>Add to Order</button>
      </div>
    ));
  };

  const renderOrderItems = () => {
    return orders.map((item, index) => (
      <li key={index}>
        {item.name} - ${item.price.toFixed(2)}
      </li>
    ));
  };

  return (
    <div>
      <h2>Menu</h2>
      {renderMenuItems()}
      <h2>Orders</h2>
      <ul>{renderOrderItems()}</ul>
      <h3>Total: ${orders.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</h3>
      <button onClick={() => setOrders([])}>Clear Order</button>
    </div>
  );
};

export default Menu;
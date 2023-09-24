import React from "react";

const Cart = ({ products }) => {
  // Filter products based on the 'inCart' property
  const cartItems = products.filter((product) => product.inCart);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((product) => (
          <li key={product.name}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
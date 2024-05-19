import React from 'react';
import { useSelector } from 'react-redux';

import ProductCard from './product_card';

const CartPage = () => {

  const cartItems = useSelector(state => state.cart.items);

  return (
    
    <div className='content'>
      
      <h2>Cart</h2>

      <div>
      
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>) 
          : (

            <div className='cardSlider'>

              {cartItems.map((product, index) => (
          
                  <ProductCard key={index} product={product} />

                  ))}

            </div>
          )}
      </div>
    </div>
    
  );
}

export default CartPage;

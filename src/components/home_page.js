import React from 'react';
import ProductCard from './product_card';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const limitedProducts = useSelector(state => state.limitedProducts.products)

   return (    
    <div className='content'>
      <h1>Welcome to Yo Shop</h1>
      
        <div className='cardSlider'>

            {limitedProducts && limitedProducts.map((product, index) => (
        
                <ProductCard key={index} product={product} />

            ))}      

        </div>
    </div>
  );
};

export default HomePage;

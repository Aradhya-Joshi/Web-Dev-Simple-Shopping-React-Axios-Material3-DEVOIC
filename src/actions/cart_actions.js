
export const addToCart = (product) => {
  console.log(product);
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  // src/actions/cartActions.js
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  
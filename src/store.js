import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';

import categoriesReducer from './reducers/catrgories_reducer';
import cartReducer from './reducers/cart_reducers'
import limitedProductsReducer from './reducers/limited_products_reducre'

const store = configureStore({
  reducer: combineReducers({

    categories: categoriesReducer,
    limitedProducts: limitedProductsReducer,
    cart: cartReducer,
    
  }),

});

export default store;

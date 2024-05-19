import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action creator to fetch all categories
export const fetchCategories = createAsyncThunk(
  'data/fetchCategories',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    // console.log(response.data);
    return response.data;
  }
);

// Action creator to fetch all products
export const fetchAllProducts = createAsyncThunk(
  'data/fetchAllProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    // console.log(response.data);
    return response.data;
  }
);

// Action creator to fetch products in a specific category
export const fetchProductsByCategory = createAsyncThunk(
  'data/fetchProductsByCategory',
  async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    // console.log(response.data);
    return response.data;
  }
);


// Action creator to fetch limited products (10) in a specific category
export const fetchLimitedProducts = createAsyncThunk(
    'data/fetchLimitedProducts',
    async () => {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=10`);
      console.log(response.data);
      return response.data;
    }
  );
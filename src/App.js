import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/navbar_and_categories';
import HomePage from './components/home_page';
import CartPage from './components/cart_page';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchLimitedProducts } from './actions/api_actions';

function App() {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dispatch fetchCategories action when the component mounts
        await dispatch(fetchCategories());
        // After categories are fetched, dispatch fetchLimitedProducts action
        await dispatch(fetchLimitedProducts());
        // After products are fetched, set loading to false
        setLoading(false);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        // Set loading to false in case of error
        setLoading(false);
      }
    };
  
    // Call fetchData function
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
     
      {loading && <div className="loading">Loading...</div>}
      
     
      {!loading && (
        <Router>
          <AppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      )
    }
    
    </div>

  );
}

export default App;
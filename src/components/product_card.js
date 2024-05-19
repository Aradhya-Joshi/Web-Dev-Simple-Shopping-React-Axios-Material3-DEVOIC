import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cart_actions';

const ProductCard = ({ product }) => {
  
  const dispatch = useDispatch();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const isProductInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (isProductInCart) {
      setIsSnackbarOpen(true);
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Card style={{ maxWidth: 300, border: '1px solid #000', borderRadius: '8px', padding: 5, margin: 5 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
        title={product.title}
      />
      <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" component="p">
          ${product.price}
        </Typography>

        {isProductInCart ? (
          <Button variant="contained" color="secondary" onClick={handleRemoveFromCart}>
            Remove from Cart
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </CardContent>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Product already in cart!"
      />
    </Card>
  );
};

export default ProductCard;

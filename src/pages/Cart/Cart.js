import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Cart = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6" color="text.secondary">
          Your cart is empty
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Add some beautiful home decor items to get started!
        </Typography>
      </Box>
    </Container>
  );
};

export default Cart;

import React from 'react';
import { Container, Typography } from '@mui/material';

const Checkout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="body1">
        Checkout functionality will be implemented here.
      </Typography>
    </Container>
  );
};

export default Checkout;

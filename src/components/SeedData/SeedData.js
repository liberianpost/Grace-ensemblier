import React from 'react';
import { Button } from '@mui/material';
import { seedProducts } from '../../utils/seedData';

const SeedData = () => {
  return (
    <Button variant="contained" color="secondary" onClick={seedProducts}>
      Add Sample Products
    </Button>
  );
};

export default SeedData;

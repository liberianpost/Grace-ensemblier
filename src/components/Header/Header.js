import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HomeDecor Elegance
        </Typography>
        
        <Button color="inherit">Home</Button>
        <Button color="inherit">Products</Button>
        
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        
        {currentUser ? (
          <Button color="inherit">Logout</Button>
        ) : (
          <Button color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

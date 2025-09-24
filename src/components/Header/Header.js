import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box } from '@mui/material';
import { ShoppingCart, Menu, Close, Diamond } from '@mui/icons-material';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.1)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Diamond sx={{ color: '#ff00de', fontSize: 32 }} />
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontWeight: 800,
                background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Grace Ensemblier
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Button color="inherit" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>Home</Button>
            <Button color="inherit" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>Collections</Button>
            <Button color="inherit" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>Designers</Button>
            <Button color="inherit" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>About</Button>
            
            <IconButton color="inherit" sx={{ 
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              marginLeft: 2
            }}>
              <Badge badgeContent={3} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>

          <IconButton 
            color="inherit" 
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      {mobileMenu && (
        <Box sx={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          padding: 2
        }}>
          <Button fullWidth color="inherit" sx={{ py: 2 }}>Home</Button>
          <Button fullWidth color="inherit" sx={{ py: 2 }}>Collections</Button>
          <Button fullWidth color="inherit" sx={{ py: 2 }}>Designers</Button>
          <Button fullWidth color="inherit" sx={{ py: 2 }}>About</Button>
        </Box>
      )}
    </>
  );
};

export default Header;

import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import { Favorite, ShoppingBag, Visibility } from '@mui/icons-material';

const ProductCard = ({ product }) => {
  return (
    <Card className="glass-card" sx={{ 
      maxWidth: 345, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="280"
          image={product.imageUrl || '/placeholder-image.jpg'}
          alt={product.name}
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          className="card-image"
        />
        <Box sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}>
          <Button 
            size="small" 
            sx={{ 
              minWidth: 'auto', 
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              borderRadius: '50%',
              width: 40,
              height: 40
            }}
          >
            <Favorite />
          </Button>
          <Button 
            size="small" 
            sx={{ 
              minWidth: 'auto', 
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              borderRadius: '50%',
              width: 40,
              height: 40
            }}
          >
            <Visibility />
          </Button>
        </Box>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
        <Typography variant="h6" component="h3" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, minHeight: 40 }}>
          {product.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ 
            color: '#ff00de', 
            fontWeight: 800,
            textShadow: '0 0 10px rgba(255,0,222,0.5)'
          }}>
            ${product.price}
          </Typography>
          <Typography variant="body2" sx={{ 
            color: 'rgba(255,255,255,0.6)',
            background: 'rgba(255,255,255,0.1)',
            px: 1,
            py: 0.5,
            borderRadius: 1
          }}>
            {product.category}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          fullWidth 
          variant="contained" 
          startIcon={<ShoppingBag />}
          sx={{
            background: 'linear-gradient(45deg, #ff00de, #ff6b6b)',
            borderRadius: 2,
            py: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

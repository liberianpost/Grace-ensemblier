import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Button, Box, Chip, Rating } from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'products', id));
        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <Typography>Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.imageUrl || '/placeholder-image.jpg'}
            alt={product.name}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Chip label={product.category} color="primary" sx={{ mb: 2 }} />
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button variant="contained" size="large" startIcon={<ShoppingCart />}>
              Add to Cart
            </Button>
            <Button variant="outlined" size="large" startIcon={<Favorite />}>
              Add to Wishlist
            </Button>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>Product Details</Typography>
            <Typography variant="body2" color="text.secondary">
              Material: {product.material || 'High-quality materials'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dimensions: {product.dimensions || 'Standard size'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In stock: {product.stock || 10} items
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;

import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2E8B57 30%, #3CB371 90%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const Home = () => {
  return (
    <div>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Transform Your Space
          </Typography>
          <Typography variant="h5" gutterBottom>
            Discover premium home decoration that tells your story
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
            Shop Now
          </Button>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Modern Design
            </Typography>
            <Typography>
              Contemporary pieces that blend style and functionality
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Quality Materials
            </Typography>
            <Typography>
              Crafted from sustainable, high-quality materials
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom>
              Fast Shipping
            </Typography>
            <Typography>
              Free delivery on orders over $100
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

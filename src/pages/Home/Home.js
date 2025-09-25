import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardMedia } from '@mui/material';
import { ArrowForward, PlayArrow, Star, Favorite, Diamond } from '@mui/icons-material';
import './Home.css';

const Home = () => {
  const featuredCollections = [
    {
      title: 'Modern Luxury',
      description: 'Contemporary pieces for the sophisticated home',
      image: 'PHOTO-2025-09-24-17-30-46.jpg',
      items: '24 Products'
    },
    {
      title: 'Artisan Crafted',
      description: 'Handmade treasures with unique character',
      image: 'PHOTO-2025-09-24-17-30-52.jpg',
      items: '18 Products'
    },
    {
      title: 'Minimalist Elegance',
      description: 'Clean lines and timeless design',
      image: 'PHOTO-2025-09-24-17-31-13.jpg',
      items: '32 Products'
    },
    {
      title: 'Premium Textiles',
      description: 'Luxurious fabrics and finishes',
      image: 'PHOTO-2025-09-24-17-31-40.jpg',
      items: '15 Products'
    }
  ];

  const stats = [
    { number: '500+', label: 'Premium Products' },
    { number: '50+', label: 'International Designers' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '5★', label: 'Average Rating' }
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: 'white' }}>
      {/* White Background */}
      <Box className="white-bg" />
      
      {/* Gold Particles - Removed animation */}
      <Box className="gold-particles-container">
        {[...Array(15)].map((_, i) => (
          <Box
            key={i}
            className="gold-particle"
            sx={{
              width: Math.random() * 60 + 10,
              height: Math.random() * 60 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ 
        position: 'relative', 
        zIndex: 2,
        paddingTop: '8vh' 
      }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8, pt: 2 }}>
          <Diamond sx={{ 
            fontSize: 60, 
            color: '#D4AF37', 
            mb: 2
          }} />
          <Typography variant="h1" className="luxury-hero-title" sx={{ mb: 2, color: 'black' }}>
            GRACE ENSEMBLIER
          </Typography>
          <Typography variant="h4" className="luxury-hero-subtitle" sx={{ mb: 3, color: 'black' }}>
            Where Luxury Meets Timeless Design
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              className="white-glass-button discover-collection-btn"
              endIcon={<ArrowForward />}
              sx={{ px: 4, py: 1.5, color: 'black' }}
            >
              Discover Collection
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              className="white-glass-button luxury-tour-btn"
              startIcon={<PlayArrow />}
              sx={{ 
                px: 4, 
                py: 1.5,
                border: '2px solid rgba(0, 0, 0, 0.3)',
                color: 'black'
              }}
            >
              Luxury Tour
            </Button>
          </Box>
        </Box>

        {/* Featured Collections */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" className="luxury-hero-title" sx={{ textAlign: 'center', mb: 4, fontSize: '2.5rem', color: 'black' }}>
            Exclusive Collections
          </Typography>
          <Grid container spacing={3}>
            {featuredCollections.map((collection, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="white-glass-card" sx={{ height: '100%' }}>
                  <Box className="luxury-image-container" sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`/${collection.image}`}
                      alt={collection.title}
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        height: 200
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      display: 'flex',
                      gap: 1,
                      zIndex: 2
                    }}>
                      <Button 
                        size="small" 
                        sx={{ 
                          minWidth: 'auto', 
                          background: 'rgba(255, 255, 255, 0.9)',
                          color: '#D4AF37',
                          borderRadius: '50%',
                          width: 32,
                          height: 32,
                          '&:hover': {
                            background: 'rgba(212, 175, 55, 0.9)',
                            color: '#000'
                          }
                        }}
                      >
                        <Favorite fontSize="small" />
                      </Button>
                    </Box>
                  </Box>
                  
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ 
                      color: 'black', 
                      fontWeight: 600, 
                      mb: 1,
                      fontSize: '1.3rem',
                      fontFamily: 'Cormorant Garamond, serif'
                    }}>
                      {collection.title}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666', 
                      mb: 2,
                      lineHeight: 1.4,
                      fontSize: '0.9rem'
                    }}>
                      {collection.description}
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: 'black',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      border: '1px solid #ddd',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 4,
                      fontSize: '0.75rem'
                    }}>
                      {collection.items}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Luxury Stats Section */}
        <Box className="luxury-stats" sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                <Typography className="luxury-stat-number" sx={{ color: 'black' }}>
                  {stat.number}
                </Typography>
                <Typography className="luxury-stat-label" sx={{ color: 'black' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Final CTA Section */}
        <Box sx={{ textAlign: 'center', mb: 8, pt: 2 }}>
          <Typography variant="h2" className="luxury-hero-title" sx={{ mb: 2, fontSize: '2.5rem', color: 'black' }}>
            Experience Luxury
          </Typography>
          <Typography variant="h5" className="luxury-hero-subtitle" sx={{ mb: 3, color: 'black' }}>
            Join the elite circle of homeowners who trust Grace Ensemblier
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            className="white-glass-button begin-journey-btn"
            endIcon={<Star sx={{ color: 'black' }} />}
            sx={{ 
              px: 6, 
              py: 1.5,
              fontSize: '1.1rem',
              background: 'rgba(0, 0, 0, 0.05)',
              color: 'black'
            }}
          >
            Begin Your Journey
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

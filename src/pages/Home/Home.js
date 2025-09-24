import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardMedia } from '@mui/material';
import { ArrowForward, PlayArrow, Star, Favorite, Share, Diamond } from '@mui/icons-material';
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
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: 'var(--black-bg)' }}>
      {/* Luxury Gold Background */}
      <Box className="luxury-bg" />
      
      {/* Gold Particles */}
      <Box className="gold-particles-container">
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            className="gold-particle"
            sx={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              opacity: Math.random() * 0.4 + 0.2
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ 
        position: 'relative', 
        zIndex: 2,
        paddingTop: '12vh' 
      }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 10, pt: 4 }}>
          <Diamond sx={{ 
            fontSize: 80, 
            color: '#D4AF37', 
            mb: 2,
            filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))'
          }} />
          <Typography variant="h1" className="luxury-hero-title" sx={{ mb: 3 }}>
            GRACE ENSEMBLIER
          </Typography>
          <Typography variant="h4" className="luxury-hero-subtitle" sx={{ mb: 4 }}>
            Where Luxury Meets Timeless Design
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              className="gold-glass-button"
              endIcon={<ArrowForward />}
              sx={{ px: 5, py: 2 }}
            >
              Discover Collection
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              className="gold-glass-button"
              startIcon={<PlayArrow />}
              sx={{ 
                px: 5, 
                py: 2,
                border: '2px solid rgba(212, 175, 55, 0.5)'
              }}
            >
              Luxury Tour
            </Button>
          </Box>
        </Box>

        {/* Featured Collections */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h3" className="luxury-hero-title" sx={{ textAlign: 'center', mb: 6, fontSize: '3.5rem' }}>
            Exclusive Collections
          </Typography>
          <Grid container spacing={4}>
            {featuredCollections.map((collection, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="gold-glass-card" sx={{ height: '100%' }}>
                  <Box className="luxury-image-container" sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={`/${collection.image}`}
                      alt={collection.title}
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                        height: 280
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      display: 'flex',
                      gap: 1,
                      zIndex: 2
                    }}>
                      <Button 
                        size="small" 
                        sx={{ 
                          minWidth: 'auto', 
                          background: 'rgba(10, 10, 10, 0.7)',
                          color: '#D4AF37',
                          borderRadius: '50%',
                          width: 40,
                          height: 40,
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
                  
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ 
                      color: '#D4AF37', 
                      fontWeight: 600, 
                      mb: 1,
                      fontFamily: 'Cormorant Garamond, serif'
                    }}>
                      {collection.title}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'rgba(255, 248, 220, 0.8)', 
                      mb: 2,
                      lineHeight: 1.6
                    }}>
                      {collection.description}
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: '#FFD700',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                      border: '1px solid #FFD700',
                      px: 2,
                      py: 1,
                      borderRadius: 4
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
        <Box className="luxury-stats" sx={{ mb: 12 }}>
          <Grid container spacing={6}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                <Typography className="luxury-stat-number">
                  {stat.number}
                </Typography>
                <Typography className="luxury-stat-label">
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Final CTA Section */}
        <Box sx={{ textAlign: 'center', mb: 10, pt: 4 }}>
          <Typography variant="h2" className="luxury-hero-title" sx={{ mb: 3, fontSize: '4rem' }}>
            Experience Luxury
          </Typography>
          <Typography variant="h5" className="luxury-hero-subtitle" sx={{ mb: 5 }}>
            Join the elite circle of homeowners who trust Grace Ensemblier
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            className="gold-glass-button"
            endIcon={<Star sx={{ color: '#000' }} />}
            sx={{ 
              px: 8, 
              py: 2.5,
              fontSize: '1.3rem',
              background: 'var(--gold-gradient)',
              '&:hover': {
                background: 'var(--gold-gradient)',
                transform: 'translateY(-3px) scale(1.05)'
              }
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

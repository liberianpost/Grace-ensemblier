import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardMedia } from '@mui/material';
import { ArrowForward, PlayArrow, Star, Favorite, Share } from '@mui/icons-material';

const Home = () => {
  const featuredImages = [
    'PHOTO-2025-09-24-17-30-46.jpg',
    'PHOTO-2025-09-24-17-30-52.jpg',
    'PHOTO-2025-09-24-17-31-13.jpg',
    'PHOTO-2025-09-24-17-31-40.jpg'
  ];

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
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Particles */}
      <Box className="particles-container">
        {[...Array(50)].map((_, i) => (
          <Box
            key={i}
            className="particle"
            sx={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ 
        position: 'relative', 
        zIndex: 2,
        paddingTop: '15vh' 
      }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h1" className="hero-title" sx={{ mb: 3, fontSize: { xs: '3rem', md: '4rem', lg: '5rem' } }}>
            ELEVATE YOUR SPACE
          </Typography>
          <Typography variant="h4" className="hero-subtitle" sx={{ mb: 4, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Where Art Meets Interior Design
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              className="glass-button"
              endIcon={<ArrowForward />}
              sx={{ px: 4, py: 1.5, fontSize: { xs: '0.9rem', md: '1.1rem' } }}
            >
              Explore Collection
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              className="glass-button"
              startIcon={<PlayArrow />}
              sx={{ 
                px: 4, 
                py: 1.5, 
                border: '2px solid rgba(255,255,255,0.3)',
                fontSize: { xs: '0.9rem', md: '1.1rem' }
              }}
            >
              Showreel
            </Button>
          </Box>
        </Box>

        {/* Featured Images Gallery */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" className="hero-title" sx={{ textAlign: 'center', mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
            Featured Collections
          </Typography>
          <Grid container spacing={3}>
            {featuredCollections.map((collection, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="glass-card" sx={{ 
                  height: '100%', 
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px) scale(1.02)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={`/${collection.image}`}
                      alt={collection.title}
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      display: 'flex',
                      gap: 1
                    }}>
                      <Button 
                        size="small" 
                        sx={{ 
                          minWidth: 'auto', 
                          background: 'rgba(0,0,0,0.5)',
                          color: 'white',
                          borderRadius: '50%',
                          width: 35,
                          height: 35
                        }}
                      >
                        <Favorite fontSize="small" />
                      </Button>
                      <Button 
                        size="small" 
                        sx={{ 
                          minWidth: 'auto', 
                          background: 'rgba(0,0,0,0.5)',
                          color: 'white',
                          borderRadius: '50%',
                          width: 35,
                          height: 35
                        }}
                      >
                        <Share fontSize="small" />
                      </Button>
                    </Box>
                  </Box>
                  
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                      {collection.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                      {collection.description}
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: '#ff00de',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: 1
                    }}>
                      {collection.items}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box className="glass-card" sx={{ p: 6, mb: 10, textAlign: 'center' }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Typography variant="h3" sx={{ 
                  color: '#ff00de', 
                  fontWeight: 800,
                  textShadow: '0 0 20px rgba(255,0,222,0.5)',
                  mb: 1
                }}>
                  {stat.number}
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Feature Cards */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {[
            { 
              title: 'Bespoke Designs', 
              desc: 'Custom-made pieces for unique spaces', 
              icon: '✨',
              image: 'PHOTO-2025-09-24-17-30-46.jpg'
            },
            { 
              title: 'Global Artisans', 
              desc: 'Handcrafted by master craftsmen worldwide', 
              icon: '🌍',
              image: 'PHOTO-2025-09-24-17-30-52.jpg'
            },
            { 
              title: 'Sustainable Luxury', 
              desc: 'Eco-friendly materials, timeless design', 
              icon: '♻️',
              image: 'PHOTO-2025-09-24-17-31-13.jpg'
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                className="glass-card floating"
                sx={{ 
                  p: 0,
                  overflow: 'hidden',
                  animationDelay: `${index * 2}s`,
                  height: '100%'
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={`/${feature.image}`}
                  alt={feature.title}
                  sx={{ objectFit: 'cover' }}
                />
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ mb: 2, fontSize: '3rem' }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'white' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h3" className="hero-title" sx={{ mb: 3 }}>
            Ready to Transform Your Space?
          </Typography>
          <Typography variant="h6" className="hero-subtitle" sx={{ mb: 4 }}>
            Join thousands of satisfied customers who've elevated their homes with our collections
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            className="glass-button"
            endIcon={<Star />}
            sx={{ 
              px: 6, 
              py: 2,
              fontSize: '1.2rem',
              background: 'linear-gradient(45deg, #ff00de, #ff6b6b)',
              fontWeight: 600
            }}
          >
            Start Shopping Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

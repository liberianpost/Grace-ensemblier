import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';

const Home = () => {
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

      <Container maxWidth="lg" sx={{ 
        position: 'relative', 
        zIndex: 2,
        paddingTop: '20vh' 
      }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" className="hero-title" sx={{ mb: 3 }}>
            ELEVATE YOUR SPACE
          </Typography>
          <Typography variant="h4" className="hero-subtitle" sx={{ mb: 4 }}>
            Where Art Meets Interior Design
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              className="glass-button"
              endIcon={<ArrowForward />}
              sx={{ px: 4, py: 1.5 }}
            >
              Explore Collection
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              className="glass-button"
              startIcon={<PlayArrow />}
              sx={{ px: 4, py: 1.5, border: '2px solid rgba(255,255,255,0.3)' }}
            >
              Showreel
            </Button>
          </Box>
        </Box>

        {/* Feature Cards */}
        <Grid container spacing={4} sx={{ mt: 8 }}>
          {[
            { title: 'Bespoke Designs', desc: 'Custom-made pieces for unique spaces', icon: '✨' },
            { title: 'Global Artisans', desc: 'Handcrafted by master craftsmen worldwide', icon: '🌍' },
            { title: 'Sustainable Luxury', desc: 'Eco-friendly materials, timeless design', icon: '♻️' }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                className="glass-card floating"
                sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  animationDelay: `${index * 2}s`,
                  height: '100%'
                }}
              >
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

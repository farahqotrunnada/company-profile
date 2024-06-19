import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, IconButton } from '@mui/material';
import Link from 'next/link';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#213260',
      color: 'white',
      padding: '2rem 0',
      marginTop: '2rem',
      width: '100vw',
      left: 'calc(-50vw + 50%)',
      position: 'relative',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Typography variant="body2">
            <Link href="/services" passHref>
              <Button color="inherit" sx={{ display: 'block', textAlign: 'left', padding: 0, color: 'white', textTransform: 'none' }}>SmartHome Automation System</Button>
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/services" passHref>
              <Button color="inherit" sx={{ display: 'block', textAlign: 'left', padding: 0, color: 'white', textTransform: 'none' }}>EcoDrive Electric Vehicle</Button>
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '1rem' }}>All rights reserved.</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Box>
            <Link href="/services" passHref>
              <Button color="inherit" sx={{ display: 'block', textAlign: 'left', padding: 0, color: 'white', textTransform: 'none' }}>Services</Button>
            </Link>
            <Link href="/aboutus" passHref>
              <Button color="inherit" sx={{ display: 'block', textAlign: 'left', padding: 0, color: 'white', textTransform: 'none' }}>About Us</Button>
            </Link>
            <Link href="/teams" passHref>
              <Button color="inherit" sx={{ display: 'block', textAlign: 'left', padding: 0, color: 'white', textTransform: 'none' }}>Our Teams</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Newsletter
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField label="Your Email" variant="filled" size="small" sx={{ backgroundColor: 'white', borderRadius: '4px', marginBottom: '1rem' }} />
            <Button variant="contained" color="secondary">Subscribe</Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.svg" alt="Facebook" style={{ width: 24, height: 24, filter: 'invert(100%)' }} />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram.svg" alt="Instagram" style={{ width: 24, height: 24, filter: 'invert(100%)' }} />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.svg" alt="Twitter" style={{ width: 24, height: 24, filter: 'invert(100%)' }} />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/youtube.svg" alt="YouTube" style={{ width: 24, height: 24, filter: 'invert(100%)' }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;

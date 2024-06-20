'use client'

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About Us', 'Services', 'Teams'].map((text) => (
          <ListItem key={text}>
            <Link href={`/${text.replace(/\s+/g, '').toLowerCase() === 'home' ? '' : text.replace(/\s+/g, '').toLowerCase()}`} passHref>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#213260', width: '100vw', left: 'calc(-50vw + 50%)', display: 'flex', justifyContent: 'center' }}>
      <Toolbar sx={{ width: '100%', maxWidth: 'lg', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Image src="/images/logo.svg" alt="Logo" width={57} height={57} style={{ filter: 'invert(100%)' }}/>
          <Typography variant="h6" component="div" sx={{ marginLeft: 2 }}>
            Tech Innovators Inc.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link href="/" passHref><Button color="inherit">Home</Button></Link>
          <Link href="/aboutus" passHref><Button color="inherit">About Us</Button></Link>
          <Link href="/services" passHref><Button color="inherit">Services</Button></Link>
          <Link href="/teams" passHref><Button color="inherit">Teams</Button></Link>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

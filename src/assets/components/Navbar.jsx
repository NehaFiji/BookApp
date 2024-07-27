import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#606c38' }}>
      <Toolbar>
        <Typography
          variant='h1'
          component='div'
          sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 'bold', fontSize: '32px' }}
        >
         ℭ𝔢𝔩𝔢𝔰𝔱𝔦𝔞𝔩 ℭ𝔥𝔯𝔬𝔫𝔦𝔠𝔩𝔢𝔰
        </Typography>
        <Stack direction='row' spacing={2}>
          <Link to={'/'}>
            <Button sx={{fontFamily: 'Lobster, cursive', fontSize: '16px', color: 'white', borderRadius: '20px' }}>Home</Button>
          </Link>
          <Link to={'/login'}>
            <Button sx={{fontFamily: 'Lobster, cursive', fontSize: '16px', color: 'white', borderRadius: '20px' }}>Login</Button>
          </Link>
          <Link to={'/signup'}>
            <Button sx={{fontFamily: 'Lobster, cursive', fontSize: '16px', color: 'white', borderRadius: '20px' }}>Signup</Button>
          </Link>
          
         
          
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

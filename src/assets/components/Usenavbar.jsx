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
          <Link to={'/editprofile'}>
            <Button sx={{fontFamily: 'Lobster, cursive', fontSize: '16px', color: 'white', borderRadius: '20px' }}>EditProfile</Button>
          </Link>
          <Link to={'/booklist'}>
            <Button sx={{fontFamily: 'Lobster, cursive', fontSize: '16px', color: 'white', borderRadius: '20px' }}>BookLIst</Button>
          </Link>
          <Link to={'/'}>
            <Button sx={{fontFamily: 
              'Lobster, cursive', fontSize: '16px', color: 'white', borderRadius: '20px' }}>Logout</Button>
          </Link>
         
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
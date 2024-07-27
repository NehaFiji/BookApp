import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Adminnavbar = () => {
  return (
    <AppBar sx={{ backgroundColor: '#606c38' }}>
      <Toolbar>
        <Typography
          variant='h1'
          component='div'
          sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 'bold', fontSize: '32px' }}
        >
         𝓐𝓭𝓶𝓲𝓷 𝓓𝓪𝓼𝓱𝓫𝓸𝓪𝓻𝓭
        </Typography>
        <Stack direction='row' spacing={2}>
          <Link to={'/admin'}>
            <Button sx={{fontFamily: 'Lobster, cursive', fontSize: '16px', color: 'white', borderRadius: '20px' }}>Logout</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Adminnavbar;
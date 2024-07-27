import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
    function popup() {
        alert('Successful login');
    }

    return (
        <div className="container">
            <div id="id1">
                <h1>︵‿︵‿୨♡ Ｌｏｇｉｎ ♡୧‿︵‿︵</h1>
            </div>
            <div>
                <TextField 
                    id="outlined-basic" 
                    label="Username" 
                    variant="outlined" 
                    sx={{width:'300px'}} 
                />
            </div>
            <div>
                <TextField 
                    sx={{width:'300px', marginTop:"9px"}}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <div>
                <Link onClick={popup} to={'/allbooks'}>
                    <Button 
                        sx={{marginTop:"9px", backgroundColor:'#606c38'}} 
                        variant="contained"
                    >
                        Login
                    </Button>
                </Link>
            </div>
            <div>
                <a href='http://localhost:5173/signup' style={{color:"black"}}>Don't have an account? Sign up</a><br />
            </div>
        </div>
    )
}

export default Login;

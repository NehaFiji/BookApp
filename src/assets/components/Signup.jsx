import { Box, Button, Checkbox, colors, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import './Signup.css';

const Signup = () => {
    function popup() {
        alert('SUCCESSFULLY SIGNED IN');
    }

    return (
        <div className="container2">
            <Box 
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '15ch', marginLeft: '-57px' }
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        sx={{ marginTop: "35px", width: '300px' }}
                        className="textField"
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Place" 
                        variant="outlined" 
                        sx={{ width: '300px' }}
                        className="textField"
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Age" 
                        variant="outlined" 
                        sx={{ width: '300px' }}
                        className="textField"
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Email id" 
                        variant="outlined" 
                        sx={{ width: '300px' }}
                        className="textField"
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Contact Details" 
                        variant="outlined" 
                        sx={{ width: '300px' }}
                        className="textField"
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Phone number" 
                        variant="outlined" 
                        sx={{ width: '300px' }}
                        className="textField"
                    />
                </div>
                <div style={{ width: "230px" }}>
                    <Checkbox {...label} />
                    <small className="checkboxLabel">I accept the terms & conditions</small>
                </div>
                <Link to={'/allbooks'}>
                    <Button 
                        onClick={popup} 
                        sx={{ marginTop: "0%", backgroundColor: '#606c38' }}
                        variant="contained"
                        className="button"
                    >
                        Signup
                    </Button>
                </Link>
                <br />
                <small>
                    Already have an account? <Link to={'/login'}><Button color='inherit' sx={{ fontSize: '12px' }} >Login</Button></Link>
                </small>
            </Box>
        </div>
    );
}

export default Signup;

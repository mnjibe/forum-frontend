import * as React from 'react';
import {useState, useEffect}  from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 
import { Navigate, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';

export default function SignUp() { 

    const navigate = useNavigate();
    const [name, setUserName] = useState("");  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}/api/v1/auth/register`, {
        name,
        email,
        password,
      })
      .then((res) => { 
        console.log("Posting:::  ", res.data);
        navigate(`/userpage`);
        localStorage.setItem("token");
        window.location.reload();
      })
      .catch((err) => console.log("err::  ", err));
  };
    return (
     <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "0px" }}
    >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}> 
            <TextField 
            margin="normal"
            required
            fullWidth
            label="User Name"
            name="username"
            autoFocus
            value={name}
          onChange={(e) => setUserName(e.target.value)}
          />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={register}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Button variant="body2"
                onClick={()=> { 
                  navigate("/signin")
                }}>
                  Already Have an Account? Sign In 
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
  );
}
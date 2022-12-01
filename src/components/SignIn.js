import * as React from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


export default function SignIn() { 
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postData = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}/api/v1/auth/login`, {
        email,
        password,
      })
      .then((res) => { 
        console.log("Posting:::  ", res.data);
        localStorage.setItem("token", res.data.token);
        navigate(`/userpage`);
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
              onClick={postData}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Button variant="body2"
                onClick={()=> { 
                  navigate("/reset")
                }}>
                  Forgot password?
                </Button>
              </Grid>
              <Grid item>
                <Button  variant="body2" 
                onClick={() => {
                  navigate("/signup")
                }}>
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
  );
}
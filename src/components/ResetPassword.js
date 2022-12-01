import * as React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, useLocation, useParams, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';



const ResetPassword = () => {
    const params = useParams();
    const { id } = params;
    const navigate = useNavigate(); 
    const [password, setPassword] = useState("");
    const changePW = (e) => {
        e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_URL}/api/v1/auth/resetpassword/`, {
        password,
      })
      .then((res) => { 
        console.log("Posting:::  ", res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log("err::  ", err));
    }

    useEffect(() => {
        if (!id) {
           // navigate("/signup")
        } else {
            // Validate the id - call the server to check that this id is valid and that the user initiated it 
            
            // if valid, do nothing, otherwise you send user away 

        }
    }, []);
    return (
        <>
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
            Reset Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography> 
                Enter New Password 
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="token"
              label="Enter Token"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
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
              onClick={changePW}
            >
              Reset Password
            </Button>
            <Grid container>
              <Grid item xs>
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
        </>
    )
} 
export default ResetPassword;
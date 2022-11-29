import * as React from 'react';
import { axiosInstance as axios } from "../service/axios";
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


export default function ChangePW() { 
    const navigate = useNavigate();
    
    const [current_password, setCurrentPassword] = useState("");
    const [new_password, setNewPassword] = useState("");
    const postData = (e) => {
      e.preventDefault();
      axios
        .put("http://localhost:6006/api/v1/auth/updatepassword", {
          current_password,
          new_password,
        })
        .then((res) => { 
          console.log("Changing:::  ", res.data);
          navigate(`/login`);
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
              Change password
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Current Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={current_password}
                onChange={(e) => setCurrentPassword(e.target.value)}
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
                value={new_password}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={postData}
              >
                Change Password
              </Button>
            </Box>
          </Box>
        </Box>
    );
  }
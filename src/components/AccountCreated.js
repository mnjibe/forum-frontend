import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; 


export default function CheckEmail() {

    const navigate = useNavigate;

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
              <AccountBoxIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Account Successfully Created!
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography> 
              Please Sign In to Your New Account!
              </Typography>
              <Button 
              fullWidth
              variant='contained'
              color = "primary"
              sx={{ mt: 3, mb: 2 }}
              component = "a"
              href='/signin'
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Box>
    );
  } 
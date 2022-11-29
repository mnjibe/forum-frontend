import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
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
              <MarkEmailReadIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Email Successfully Sent
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography> 
              Check Email for the Link to Reset Your Password
              </Typography>
              <Button 
              fullWidth
              variant='contained'
              color = "primary"
              sx={{ mt: 3, mb: 2 }}
              component = "a"
              href='/signin'
              >
                Return to the Sign In Page
              </Button>
            </Box>
          </Box>
        </Box>
    );
  } 
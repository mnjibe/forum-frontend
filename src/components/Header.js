import './Header.css';
import React from 'react';
import { Tab, Tabs, Toolbar, AppBar, Typography, Button, ButtonGroup } from '@mui/material'; 
import  TextField  from '@mui/material/TextField';
import  SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import 'fontsource-roboto';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase'; 
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  })); 

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));



function Header() { 
    return (
        <div>
            <React.Fragment> 
                <AppBar sx={{background: '#063970', display: 'flex'}}
                position='fixed'
                > 
                <Toolbar> 

                    <Typography sx= {{fontSize: '2rem' }} color = 'primary'> FSC Forum</Typography>
                   <div> 
                   <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                   
                
                </div> 
                <InboxIcon sx={{marginLeft: '625px'}} />
                    <ButtonGroup sx={{marginLeft: 'auto'}}> 
                        <Button 
                        variant = 'outlined'
                        size = 'small'
                        color = 'primary'
                        >  
                        Log In
                        </Button>
                        <Button 
                        variant = 'contained'
                        size = 'small'
                        color = 'primary'
                        >
                        Sign Up
                        </Button>
                </ButtonGroup>
                </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    )
}


    
    

export default Header;
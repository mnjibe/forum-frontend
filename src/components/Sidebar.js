
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMark from '@mui/icons-material/QuestionMark';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from '@mui/material/IconButton';
import 'fontsource-roboto';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {Button, ButtonGroup } from '@mui/material';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { axiosInstance as axios } from "../service/axios";

const drawerWidth = 240;

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




const Sidebar = () => { 
    const isLoggedIn = !!localStorage.getItem("token"); 
    const logOut = () => {
        localStorage.removeItem("token")
    }
const [user, setUser] = React.useState("")
React.useEffect(() => {
axios.get(`${process.env.REACT_APP_URL}/api/v1/auth/me`)
.then((res)=> { 
    setUser(res.data.data)
    console.log("Current User::: ", res.data.data)
})
.catch(err => console.log("err:: ", err))
}, [])
    return (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#063970' }}>
                    <Toolbar>

                        <Typography sx={{ fontSize: '2rem' }} color='primary'> FSC Forum</Typography>
                        <div>

                        </div>
                        {isLoggedIn ?  <IconButton sx={{marginLeft: '1000px'}} component = "a" href = "/userpage" > 
                                       <AccountBoxIcon size = "large" />
                                       </IconButton>  : null}

                        {isLoggedIn ?  <Typography> <h4> Hi, {user.name}! </h4></Typography> : null }
                       
                        <ButtonGroup sx={{ marginLeft: 'auto' }}> 
                            <Button
                                variant='outlined'
                                size='small'
                                color='primary'
                                component = "a"
                                href = "/signin"
                                onClick = {logOut}
                            >
                                {isLoggedIn ? "Logout" : "Log In"}
                            </Button>
                            {!isLoggedIn && <Button
                                variant='contained'
                                size='small'
                                color='primary'
                                component = "a"
                                href = "/signup"
                            >
                                Sign Up
                            </Button>}
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#808080' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
        <ListItemButton component = "a" href='/'>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component = "a" href='/allquestions'>
        <ListItemIcon>
          <QuestionMark />
        </ListItemIcon>
        <ListItemText primary="Questions" />
      </ListItemButton>
      <ListItemButton component = "a" href='/users'>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
                    </Box>
                </Drawer>
            </Box>
    );
}

export default Sidebar;


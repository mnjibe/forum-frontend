
import * as React from 'react';
import Counter from '../components/Counter'
import useState from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMark  from '@mui/icons-material/QuestionMark';
import  TextField  from '@mui/material/TextField';
import  SearchIcon from '@mui/icons-material/Search';
import 'fontsource-roboto';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase'; 
import { Tab, Tabs, Button, ButtonGroup } from '@mui/material'; 
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack'; 
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import  KeyboardDoubleArrowDownIcon  from '@mui/icons-material/KeyboardDoubleArrowDown';

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




function Sidebar() { 
    return (
        <React.Fragment> 
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#063970' }}>
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
        <List>
            {['Home', 'Questions'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <QuestionMark />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />  
        <Typography> 
          <h1> Day Mode and Night Mode </h1> 
                <p>Added: Today .......... Viewed: 6 times </p> 
        </Typography> 
        <Divider /> 
        <Stack direction = 'row' spacing={3}> 
              <Stack 
                direction = "column"
                spacing = {2}> 
                <IconButton>
                    <KeyboardDoubleArrowUpIcon color = 'primary'/>
                </IconButton> 
                <IconButton sx={{marginTop: '2px'}} > 
                  <KeyboardDoubleArrowDownIcon color = 'primary'/>
                </IconButton> 
                </Stack> 
              <Typography> 
                <h6>        </h6>
              </Typography>
                <Typography> 
          <p> 
            I have tried to create the day mode and night with a check button, it's working well. 
            The default mode is day mode but the problem is when I'm in night mode then refresh 
            the page or go to the other pages on the site it will be back to day mode. The day 
            and night modes I tried to make with a check button function well. Day mode is the 
            default, however the issue arises when I go to night mode. the page or visit any 
            other sites on the website, the mode will return to day.
          </p>
        </Typography> 
      </Stack> 
      </Box>  
      </Box>  
      <Divider /> 
      <TextField
          sx={{ marginTop: "20px" ,marginLeft: "300px" , width: '950px'}}
          id="filled-multiline-static"
          label = "Enter Answer Here..."
          multiline
          rows={8}
          variant="filled"
        /> 
   
    </React.Fragment>
  );
}

export default Sidebar;
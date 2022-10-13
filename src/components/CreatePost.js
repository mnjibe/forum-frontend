import * as React from 'react';
import axios from 'axios';
import Counter from './ViewPost'
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





function CreatePost() {
  
  /*const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const postData = (e) => {
  e.preventDefault();
  axios.post('http://localhost:6006/api/v1/posts', {
  title,
  body
}).then(res => console.log("Posting:::  ", res))
.catch(err => console.log('err::  ', err))
*/

    return(
        <Box component="main" 
        sx={{ flexGrow: 1, p: 3, marginLeft: "300px",marginTop:"-40px" }}>
            <Toolbar />
            <Typography>
              <h1> Ask a Public Question </h1>
            </Typography>
            <Divider /> 
        <Stack spacing={2}> 
        <form>
            <Typography> 
                <h3>Title </h3>
                <h4> Be specific and imagine you're asking a question to another person</h4>
            </Typography>
            <TextField 
           //onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic" variant="outlined" fullWidth placeholder='e.g. Is there a way to switch to Night Mode' />
            <Typography> 
                <h3> Body</h3>
                <h4> Include all information needed to answer the question</h4>
            </Typography>
        </form>
            <TextField
          //  onChange={(e) => setBody(e.target.value)}
            sx={{ marginTop: "20px", marginLeft: "0px", width: '950px' }}
            id="filled-multiline-static"
            label="Enter Answer Here..."
            multiline
            rows={8}
            variant="filled" /> 
        </Stack> 
        <Button 
       // onClick={postData}
        sx={{marginTop: "15px"}}
        variant = 'contained'
        size = 'large'
        color = 'primary'
      >
        Post Your Question
      </Button> 
        </Box>
    )
}
export default CreatePost;
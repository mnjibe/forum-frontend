import * as React from 'react';
import axios from 'axios';
import Counter from './ViewPost'
import { useEffect,useState}  from 'react';
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
import Mock from '../data/Mock.json';
import ThemeProvider from '@mui/material/styles';
const exPosts = [
  {
      "id":1,
      "title":"habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
      "body":"Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc."
  },
{
  
  "id":2,
  "title":"vehicula consequat morbi a ipsum integer a nibh in quis justo",
  "body":"Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla."
},
{

  "id":3,
  "title":"pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu",
  "body":"Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus."
},
{
  
  "id":4,
  "title":"eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in",
  "body":"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo."
},
{
  
  "id":5,
  "title":"turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget",
  "body":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
},
  
]




const CreatePost = () => {
  const [data, setPosts] = React.useState([])

  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
 
React.useEffect (() => {
  axios.get('https://forum-backend-production.up.railway.app/api/v1/posts')
        .then(res=> {
            console.log('Pulling From::  ', res.data.data)
            setPosts(res.data.data)})
        .catch(err => console.log('err::  ', err))

    }, [])
  const postData = (e) => {
    e.preventDefault();
    axios.post('https://forum-backend-production.up.railway.app/api/v1/posts', {
    title,
    body,
    user: "6349f49c195a4e2673f69321"
  }).then(res => console.log("Posting:::  ", res.data.data))
  .catch(err => console.log('err::  ', err)) 
}
    return(
        <Box component="main" 
        sx={{ flexGrow: 1, p: 3, marginLeft: "300px",marginTop:"-40px" }}>
            <Toolbar />
            <Typography>
              <h1> Ask a Public Question </h1>
            </Typography>
            <Divider /> 
        <Stack spacing={2}> 
            <Typography> 
                <h3>Title </h3>
                <h4> Be specific and imagine you're asking a question to another person</h4>
            </Typography>
            <form noValidate> 
            <TextField 
            id="outlined-basic" variant="outlined" fullWidth placeholder='e.g. Is there a way to switch to Night Mode'
            value = {title}
            onChange={(e) => setTitle(e.target.value)} />
            <Typography> 
                <h3> Body</h3>
                <h4> Include all information needed to answer the question</h4>
            </Typography>
        </form>
        <form>
            <TextField
            sx={{ marginTop: "20px", marginLeft: "0px", width: '950px' }}
            id="filled-multiline-static"
            label="Enter Answer Here..."
            multiline
            rows={8}
            variant="filled"
            value = {body}
            onChange={(e) => setBody(e.target.value)} /> 
          </form>
        </Stack> 
        <Button 
        sx={{marginTop: "15px"}}
        variant = 'contained'
        size = 'large'
        color = 'primary'
        onClick={postData}
      >
        Post Your Question
      </Button> 
        </Box>
    )
}
export default CreatePost;
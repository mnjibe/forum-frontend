
import * as React from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import ViewPosts from './components/ViewPost';
import CreatePost from './components/CreatePost';
import SignIn from './components/SignIn';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import  AppBar  from '@mui/material/AppBar';
import  Toolbar  from '@mui/material/Toolbar';
import 'fontsource-roboto';
import  Typography  from '@mui/material/Typography';
import { makeStyles, ThemeProvider, createMUITheme} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import {white} from '@mui/material/colors';
import  TextField  from '@mui/material/TextField';
import  InputBase  from '@mui/material/InputBase';
import  Input  from '@mui/material/Input';
import  SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import  Stack  from '@mui/system/Stack';



const SearchBar = (placeholder, onChange) => {

  //this is a comment
  return (
    <div>
      <SearchIcon /> 
      <Input
          placeholder={placeholder} 
          onChange={onChange} 
          />
    </div>
  )
}

function App() {

  return (
      <div>  
<Sidebar />
<CreatePost />
    </div>

  )
}
export default App;

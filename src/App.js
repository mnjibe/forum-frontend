
import * as React from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import ViewPosts from './components/ViewPost';
import CreatePost from './components/CreatePost';
import SignIn from './components/SignIn';
import DisplayPosts from './components/DisplayPosts';
import './App.css';
import 'fontsource-roboto';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Posts from '../src/components/Posts'
import { useAutocomplete } from '@mui/material';

function App() {
    return (
    <div>


<Sidebar /> 
<CreatePost />


    </div>
    )
    }
    export default App;

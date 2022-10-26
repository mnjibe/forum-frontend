

import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import ViewPosts from './components/ViewPost';
import CreatePost from './components/CreatePost';
import SignIn from './components/SignIn';
import DisplayPosts from './components/DisplayPosts';
import DisplayUsers from './components/DisplayUsers';
import './App.css';
import 'fontsource-roboto';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Posts from '../src/components/Posts'
import { useAutocomplete } from '@mui/material';
import Mock from './data/Mock.json'
import PostPreview from './components/PostPreview'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

   
    return (
<div>
    <Sidebar />
<Router> 
    <Routes> 
        <Route path='/' element={<DisplayPosts />} />
        <Route path='/allquestions' element={<DisplayPosts />} />
        <Route path='/view/:id' element={<ViewPosts />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/users'element={<DisplayUsers />} />
    </Routes>
</Router>
</div>

    )


}
    export default App;

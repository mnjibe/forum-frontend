
import * as React from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import ViewPosts from './components/ViewPost';
import CreatePost from './components/CreatePost';
import SignIn from './components/SignIn';
import './App.css';
import 'fontsource-roboto';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Posts from '../src/components/Posts'

function App() {
    const [posts, setPosts] = React.useState(null)

    React.useEffect(() => {
        axios.get('http://localhost:6006/api/v1/posts').then(function(res) {
            console.log('res: ', res)
            setPosts(res.data)
        }).catch(function(err) {
            console.log('err: ', err)

        })
    }, [])

    return (
        <div>
            <Posts posts={posts.data} />
        </div>

    )
}
export default App;

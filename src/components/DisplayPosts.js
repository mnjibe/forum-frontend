import * as React from 'react';
import axios from 'axios';
import 'fontsource-roboto';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

function DisplayPosts() {
    const [data, setPosts] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:6006/api/v1/posts')
        .then(res=> {
            console.log('Pulling From::  ', res.data.data)
            setPosts(res.data.data)})
        .catch(err => console.log('err::  ', err))
    
    }, [])
    console.log(data)
    const arr = data.map((data,index) => {
        return (
            <tr> 
                <td> {data.id}</td>
                <td> {data.title}</td>
                <td> {data.body}</td>  
            </tr>
        )
    })
    
    return (
        <div>
         <h1> View Posts</h1>   
         <table>
            <tr>
            <th> ID </th>    
            <th> Title </th>
            <th> Body </th>
            </tr> 
            {arr}
            </table>
        </div>
    
    )
    }
    export default DisplayPosts;
import * as React from 'react';
import axios from 'axios';
import 'fontsource-roboto';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Mock from '../data/Mock.json'
import { Typography, Toolbar, Box, Stack, Divider } from '@mui/material';
import { useEffect,useState}  from 'react';
import {Link} from 'react-router-dom'

const DisplayPosts = () => { 
        const [data, setPosts] = React.useState([])

      React.useEffect (() => {
        axios.get('http://localhost:6006/api/v1/posts')
              .then(res=> {
                  console.log('Pulling From::  ', res.data.data)
                  setPosts(res.data.data)})
              .catch(err => console.log('err::  ', err))
      
          }, []) 
          const arr = data.map((data,index) => {
            return (
                <tr>
                <td>

                    <h3> 
                        <Link> {data.title} </Link> 
                    </h3> 
                    
                </td>
              </tr>
            )
          })
    return (
        <Box component="main" 
        sx={{ flexGrow: 1, p: 3, marginLeft: "300px",marginTop:"-40px" }}>
            <Toolbar />
            <Stack spacing={2}> 
                <Typography> 
                   <h1> All Questions </h1> 
                </Typography>
                <Divider /> 
                <Typography>
                <table>
                    <tr> 
                        <th></th>
                    </tr>
                    {arr}
                </table>
                </Typography> 
            </Stack>
        </Box> 
    )
}
    export default DisplayPosts;
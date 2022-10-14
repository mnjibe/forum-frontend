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
import QuestionMark from '@mui/icons-material/QuestionMark';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import 'fontsource-roboto';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Tab, Tabs, Button, ButtonGroup } from '@mui/material';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import Posts from '../components/Posts'

function ViewPosts(props) {
    return (
        <><Box component="main"
            sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "-40px" }}>
            <Toolbar />
            <Typography>
                <h1> {props.title} </h1>
                <p>Added: Today ..........Viewed: 6 times </p>
            </Typography>
            <Divider />
            <Stack direction='row' spacing={3}>
                <Stack
                    direction="column"
                    spacing={2}>
                    <IconButton>
                        <KeyboardDoubleArrowUpIcon color='primary' />
                    </IconButton>
                    <IconButton sx={{ marginTop: '2px' }}>
                        <KeyboardDoubleArrowDownIcon color='primary' />
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
            <Divider />
            <TextField
                sx={{ marginTop: "20px", marginLeft: "0px", width: '950px' }}
                id="filled-multiline-static"
                label="Enter Answer Here..."
                multiline
                rows={8}
                variant="filled" />

            <Button
                sx={{ marginTop: "15px" }}
                variant='contained'
                size='large'
                color='primary'
            >
                Post Your Answer
            </Button>
        </Box>

        </>
    )
}
export default ViewPosts;

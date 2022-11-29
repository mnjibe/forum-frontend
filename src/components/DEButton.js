import * as React from "react";
import { axiosInstance as axios } from "../service/axios";
import { Tab, Tabs, Button, ButtonGroup } from "@mui/material";
import Box from '@mui/material/Box';
import ViewPosts from "./ViewPost";


const DEBUTTON = () => {
    return (
    <Box sx={{ display: 'flex' }}> 
        <ButtonGroup> 
            <Button variant = "body2"> Edit </Button>
            <Button variant = "body2"> Delete </Button>
        </ButtonGroup>
    </Box>
    )
}
export default DEBUTTON;
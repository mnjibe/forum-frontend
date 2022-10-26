import * as React from "react";
import { Component } from "react";
import axios from "axios";
import Counter from "./ViewPost";
import useState from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMark from "@mui/icons-material/QuestionMark";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "fontsource-roboto";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Tab, Tabs, Button, ButtonGroup } from "@mui/material";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Posts from "../components/Posts";
import DisplayPosts from "./DisplayPosts";
import { useParams } from "react-router-dom";

const ViewPosts = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);
  axios
    .get(`http://localhost:6006/api/v1/posts/${id}`)
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => console.log("err::  ", err));

  return (
    <div>
      <>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "-40px" }}
        >
          <Toolbar />
          <Typography>
            <h1> {data.title} </h1>
            <p>Added: Today ..........Viewed: -- times </p>
          </Typography>
          <Divider />
          <Stack direction="row" spacing={3}>
            <Stack direction="column" spacing={2}>
              <IconButton>
                <KeyboardDoubleArrowUpIcon color="primary" />
              </IconButton>
              <IconButton sx={{ marginTop: "2px" }}>
                <KeyboardDoubleArrowDownIcon color="primary" />
              </IconButton>
            </Stack>
            <Typography>
              <h6> </h6>
            </Typography>
            <Typography>
              <p>{data.body}</p>
            </Typography>
          </Stack>
          <Divider />
          <TextField
            sx={{ marginTop: "20px", marginLeft: "0px", width: "950px" }}
            id="filled-multiline-static"
            label="Enter Answer Here..."
            multiline
            rows={8}
            variant="filled"
          />

          <Button
            sx={{ marginTop: "15px" }}
            variant="contained"
            size="large"
            color="primary"
          >
            Post Your Answer
          </Button>
        </Box>
      </>
    </div>
  );
};
export default ViewPosts;

import * as React from "react";
import { Component } from "react";
import axios from "axios";
import "fontsource-roboto";
import {
  Typography,
  Toolbar,
  Box,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Posts from "../components/Posts";
import ViewPosts from "./ViewPost";

export default class DisplayPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/posts`)
      .then((res) => {
        const posts = [];
        for (let key in res.data.data) {
          posts.push({ ...res.data.data[key], id: key });
        }
        this.setState({
          posts: posts,
        });
        console.log("Pulling From::  ", res.data.data);
      })
      .catch((err) => console.log("err::  ", err));
  }


  render() {
    const posts = this.state.posts.map((post) => {
      return <Posts key={post._id} post={post} />;
    });
    return (
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "-40px" }}
      >
        <Toolbar />
        <Stack spacing={2}>
          <Typography>
            <h1> All Questions </h1>
          </Typography> 
          <Button 
          variant = "contained"
          component = "a"
          href = "/create">
            Ask New Question
          </Button>

          <Divider />
                <div>
                     {posts}
                </div>
        </Stack>
      </Box>
    );
  }
}

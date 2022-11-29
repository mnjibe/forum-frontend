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
import { useParams } from "react-router-dom";
import Posts from "../components/Posts";

const AllPosts = () => {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`${process.env.REACT_APP_URL}/api/v1/users/${userId}/posts`)
        .then((res) => {
          const posts = [];
          for (let key in res.data.data) {
            posts.push({ ...res.data.data[key], id: key });
          }
          setUserPosts(posts);
          console.log("Pulling From::  ", res.data.data);
        })
        .catch((err) => console.log("err::  ", err));
    }
  }, []);
let one = `${process.env.REACT_APP_URL}/api/v1/users/${userId}`
const [currentUser, setCurrentUser] = useState("");
const requestOne = axios.get(one);
requestOne.then(res => {
  console.log("Pulling::: ", res.data.data)
  setCurrentUser(res.data.data)
}).catch(error => {
  console.err(error)
})
  const posts = userPosts.map((post) => {
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
          <h1> All Posts by {currentUser.name} </h1>
        </Typography>
        <Button sx={{}} variant="outlined" size="medium" color="secondary">
          <Link to={"/create"}>Ask New Question</Link>
        </Button>

        <Divider />
        <div>{posts}</div>
      </Stack>
    </Box>
  );
};
export default AllPosts;

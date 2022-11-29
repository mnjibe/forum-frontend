import * as React from "react";
import axios from "axios";
import { axiosInstance as authentication } from "../service/axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import "fontsource-roboto";
import { Tab, Tabs, Button, ButtonGroup } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Navigate, useNavigate } from "react-router-dom";
import ViewPosts from "./ViewPost";

function EditPost(props) { 
   
    const [data, setPosts] = React.useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const editData = (e) => {
      e.preventDefault();
      authentication
        .put(`http://localhost:6006/api/v1/posts/${props.post._id}`, {
          title,
          body,
        })
        .then((res) => { 
          console.log("Posting:::  ", res.data.data);
          const createdPost = res.data.data;
          navigate(`/view/${createdPost._id}`);
        })
        .catch((err) => console.log("err::  ", err));
    };
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return (
        <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "-40px" }}
    >
      <Toolbar />
      <Typography>
        <h1> Edit Your Public Question </h1>
      </Typography>
      <Divider />
      <Stack spacing={2}>
        <Typography>
          <h3>Title </h3>
          <h4>
            {" "}
            Be specific and imagine you're asking a question to another person
          </h4>
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            placeholder={data.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Typography>
            <h3> Body</h3>
            <h4> Include all information needed to answer the question</h4>
          </Typography>
          <TextField
            sx={{ marginTop: "20px", marginLeft: "0px", width: "950px" }}
            id="filled-multiline-static"
            label="Enter Answer Here..."
            multiline
            rows={8}
            variant="filled"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </form>
      </Stack>
      <Button
        sx={{ marginTop: "15px" }}
        variant="contained"
        size="large"
        color="primary"
        onClick={editData}
      >
        Edit Your Question
      </Button>
    </Box>
    )
}
export default EditPost;
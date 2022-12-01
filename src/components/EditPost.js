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
import { Navigate, useNavigate, useParams } from "react-router-dom";

function EditPost() { 
    const { id } = useParams(); 
    React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/api/v1/posts/${id}`)
    .then((res) => {
      setPosts(res.data.data)
      console.log("PULLING:::", res.data.data)
    })
    .catch((err) => console.log("ERR::: ", err ))
  }, []);
    const [data, setPosts] = React.useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const editData = (e) => {
      e.preventDefault();
      authentication
        .put(`${process.env.REACT_APP_URL}/api/v1/posts/${id}`, {
          title,
          body,
        })
        .then((res) => { 
          console.log("Updating:::  ", res.data.data);
          const updatedPost = res.data.data;
          navigate(`/view/${updatedPost._id}`);
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
            id="outlined-static"
            variant="outlined"
            fullWidth
            placeholder={data.title}
            defaultValue={data.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Typography>
            <h3> Body </h3>
            <h4> Include all information needed to answer the question</h4>
          </Typography>
          <TextField
            sx={{ marginTop: "20px", marginLeft: "0px", width: "950px" }}
            id="filled-multiline-static"
            multiline
            rows={8}
            variant="filled"
            defaultValue={data.body}
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
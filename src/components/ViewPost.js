import * as React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { axiosInstance as authentication } from "../service/axios";
import DEBUTTON from "./DEButton";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import "fontsource-roboto";
import { Tab, Tabs, Button, ButtonGroup } from "@mui/material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useNavigate, useParams, Route, Routes } from "react-router-dom";
import EditP from "./EditP";
import Comments from "./Comments";

const ViewPosts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = React.useState(null);
  const [text, setText] = React.useState("");
  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  var decodedHeader = jwt_decode(token, { header: true });
  console.log("User::: ", decoded);

  const [authUser, setAuthUser] = React.useState(false); // !!(decoded.id === data.user);
  console.log("AUTHUSER:::", authUser);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/v1/posts/${id}`)
      .then((res) => {
        setData(res.data.data);
        setAuthUser(decoded.id === res.data.data.user);
        const posts = [];
        for (let key in res.data.data) {
          posts.push({ ...res.data.data[key], id: key });
        }
        console.log("Pulling::: ", res.data.data);
      })
      .catch((err) => console.log("err::  ", err));
  }, []);
  {
    /*const [comments, setComments] = React.useState("")
  React.useEffect(() => {
    axios
    .get(`http://localhost:6006/api/v1/posts/${id}/comments`)
    .then((res) => {
      console.log("Pulling Comments::: " , res.data.data)
      setComments(res.data.data);
    })
    .catch((err) => console.log("err::  ", err));
    
  }, []) */
  }
  const postComment = (e) => {
    e.preventDefault();
    authentication
      .post(`${process.env.REACT_APP_URL}/api/v1/posts/${id}/comments`, {
        text,
      })
      .then((res) => {
        console.log("Posting:::  ", res.data.data);
        window.location.reload();
      })
      .catch((err) => console.log("err::  ", err));
  };
  const deletePost = () => {
    authentication.delete(`${process.env.REACT_APP_URL}/api/v1/posts/${id}`);
    console.log("DELETING");
    navigate("/allquestions");
  };

  return (
    <div>
      <>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginLeft: "300px", marginTop: "-40px" }}
        >
          <Toolbar />
          <Typography>
            <h1> {data?.title} </h1>
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
              <p>{data?.body}</p>
            </Typography>
          </Stack>
          <Divider />
          {authUser ? (
            <div>
              <Button variant="body2" onClick={deletePost}>
                {" "}
                Delete{" "}
              </Button>
              <EditP post={data} />
            </div>
          ) : null}
          <TextField
            sx={{ marginTop: "20px", marginLeft: "0px", width: "950px" }}
            id="filled-multiline-static"
            label="Enter Answer Here..."
            multiline
            rows={8}
            variant="filled"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Button
            sx={{ marginTop: "15px" }}
            variant="contained"
            size="large"
            color="primary"
            onClick={postComment}
          >
            Post Your Answer
          </Button> 
          <Divider /> 
          <Typography> <h2> Comments </h2></Typography>
          {data && <Comments post={data} />}
        </Box>
      </>
    </div>
  );
};
export default ViewPosts;
